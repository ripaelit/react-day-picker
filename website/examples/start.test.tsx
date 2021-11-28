import React from 'react';

import {
  clickDay,
  getDayButton,
  getTableFooter
} from '@site/src/test/po';
import { freezeBeforeAll } from '@site/src/test/utils';
import { render } from '@testing-library/react';

import Example from './start';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

describe('when a day is clicked', () => {
  const day = new Date(2021, 10, 1);
  beforeEach(() => clickDay(day));
  test('should appear as selected', () => {
    expect(getDayButton(day)).toHaveAttribute(
      'aria-pressed',
      'true'
    );
  });
  test('should update the footer', () => {
    expect(getTableFooter()).toHaveTextContent(
      'You picked 11/1/2021.'
    );
  });
});
