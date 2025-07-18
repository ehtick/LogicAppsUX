import type { ErrorSectionProps } from '..';
import { ErrorSection } from '..';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { describe, vi, beforeEach, afterEach, beforeAll, afterAll, it, test, expect } from 'vitest';

describe('lib/monitoring/requestpanel/errorsection', () => {
  let minimal: ErrorSectionProps, renderer: ShallowRenderer.ShallowRenderer;

  beforeEach(() => {
    minimal = {
      error: {
        code: '504',
        message: 'GatewayTimeout',
      },
    };
    renderer = ShallowRenderer.createRenderer();
  });

  afterEach(() => {
    renderer.unmount();
  });

  it('should render', () => {
    renderer.render(<ErrorSection {...minimal} />);

    const messageBar = renderer.getRenderOutput();
    expect(messageBar.props.intent).toBe('error');

    const [messageBarBody]: any[] = React.Children.toArray(messageBar.props.children);
    const [title, _, message]: any[] = React.Children.toArray(messageBarBody.props.children);
    expect(title.props.children).toBe(minimal?.error?.code);
    expect(message.props.children).toBe(minimal?.error?.message);
  });

  it('should render with a CSS class', () => {
    const className = 'msla-request-history-panel-error';
    renderer.render(<ErrorSection {...minimal} className={className} />);

    const messageBar = renderer.getRenderOutput();
    expect(messageBar.props.className).toBe(className);
  });

  it('should not render when there is no error', () => {
    renderer.render(<ErrorSection />);

    const messageBar = renderer.getRenderOutput();
    expect(messageBar).toBeNull();
  });
});
