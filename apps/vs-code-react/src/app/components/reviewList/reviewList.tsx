import { CheckmarkCircleFilled, DismissCircleFilled, WarningFilled } from '@fluentui/react-icons';
import { ValidationStatus } from '../../../run-service';
import type { IGroupedGroup, IGroupedItem } from '../../../run-service';
import { getShimmerElements, getValidationListColumns } from './helper';
import './styles.less';
import { DetailsRow, GroupedList, GroupHeader, SelectionMode, Shimmer } from '@fluentui/react';
import type { IGroup } from '@fluentui/react';
import { useMemo, useCallback } from 'react';
import { useReviewListStyles } from './reviewListStyles';

export interface IReviewListProps {
  isValidationLoading?: boolean;
  validationItems: IGroupedItem[];
  validationGroups: IGroupedGroup[];
}

export const ReviewList: React.FC<IReviewListProps> = ({ isValidationLoading, validationItems, validationGroups }) => {
  const styles = useReviewListStyles();
  const getGroupIcon = useCallback(
    (groupStatus: string): JSX.Element | null => {
      switch (groupStatus) {
        case ValidationStatus.succeeded: {
          return <CheckmarkCircleFilled fontSize="16px" className={styles.succeededIcon} />;
        }
        case ValidationStatus.succeeded_with_warnings: {
          return <WarningFilled fontSize="16px" className={styles.warningIcon} />;
        }
        case ValidationStatus.failed: {
          return <DismissCircleFilled fontSize="16px" className={styles.failedIcon} />;
        }
        default: {
          return null;
        }
      }
    },
    [styles.failedIcon, styles.succeededIcon, styles.warningIcon]
  );

  const shimmerList = useMemo(() => {
    const shimmerDetails = getShimmerElements();

    return new Array(4).fill(0).map((_element, index) => {
      return (
        <div className="review-list-shimmer" key={index}>
          <Shimmer className="review-list-shimmer-item" />
          <Shimmer className="review-list-shimmer-item" shimmerElements={shimmerDetails.firstRow} />
          <Shimmer className="review-list-shimmer-item" shimmerElements={shimmerDetails.secondRow} />
        </div>
      );
    });
  }, []);

  const groupedList = useMemo(() => {
    const onRenderCell = (nestingDepth?: number, item?: any, itemIndex?: number, group?: IGroup): React.ReactNode => {
      return item && typeof itemIndex === 'number' && itemIndex > -1 ? (
        <DetailsRow
          columns={getValidationListColumns()}
          groupNestingDepth={nestingDepth}
          item={item}
          itemIndex={itemIndex}
          selectionMode={SelectionMode.none}
          compact={true}
          group={group}
        />
      ) : null;
    };

    const onRenderHeader = (props?: any): JSX.Element | null => {
      if (props) {
        const toggleCollapse = (): void => {
          props.onToggleCollapse(props.group);
        };

        const headerCountStyle = { display: 'none' };
        const groupIcon = getGroupIcon(props?.group?.status);

        return (
          <div className="review-list-header">
            <GroupHeader
              className="review-list-header-text"
              styles={{ headerCount: headerCountStyle }}
              {...props}
              onToggleSelectGroup={toggleCollapse}
              compact={true}
            />
            {groupIcon}
          </div>
        );
      }

      return null;
    };

    const groupedListProps = {
      onRenderHeader,
    };

    return (
      <div className="review-list">
        <GroupedList
          items={validationItems}
          groups={validationGroups}
          onRenderCell={onRenderCell}
          selectionMode={SelectionMode.none}
          compact={true}
          groupProps={groupedListProps}
        />
      </div>
    );
  }, [validationItems, validationGroups, getGroupIcon]);

  return isValidationLoading ? <>{shimmerList}</> : <>{groupedList}</>;
};
