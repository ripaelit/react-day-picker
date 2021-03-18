import React from 'react';

import { render, RenderResult } from '@testing-library/react';

import { ContextProvider as DayPicker } from 'contexts';

import { IconDropdown } from './IconDropdown';

let icon: Element | null;
let result: RenderResult;

describe('when rendered without props', () => {
  beforeEach(() => {
    result = render(
      <DayPicker>
        <IconDropdown />
      </DayPicker>
    );
    icon = result.container.firstElementChild;
  });
  test('should render a svg element', () => {
    expect(icon?.tagName).toBe('svg');
  });
});

describe('when using a class name from props', () => {
  beforeEach(() => {
    render(
      <DayPicker>
        <IconDropdown className="foo" />
      </DayPicker>
    );
    icon = result.container.firstElementChild;
  });
  test('should add the class name', () => {
    expect(icon?.classList).toContain('foo');
  });
});
