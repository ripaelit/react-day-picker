/* 

The default modifiers matchers assigned to every day. These values are passed to
the `defaultModifiers` prop in DayPicker.tsx.

*/

import { isAfter, isBefore, isSameDay, isSameMonth } from 'date-fns';

import { ModifiersMatchers } from '../../../types';
import { DayPickerContextValue } from '../../../types/DayPickerContextValue';

/** Determines if a day is outside the displayed month.  */
function isOutside(day: Date, displayMonth: Date): boolean {
  return !isSameMonth(day, displayMonth);
}

/** Determines if a day, when displayed in a month, is interactive.  */
function isInteractive(
  day: Date,
  displayMonth: Date,
  props: DayPickerContextValue
): boolean {
  /** Props that will make the day button interactive. */
  const interactiveProps = [
    'onSelect',
    'onDayClick',
    'onDayMouseEnter',
    'onDayTouchStart'
  ];

  const { toDate, fromDate, originalProps } = props;
  const outside = isOutside(day, displayMonth);
  if (props.mode !== 'uncontrolled' && !outside) {
    return true;
  }

  // Uncontrolled mode: if some of the _original props_ passed to the component
  // are not an "interactive" prop, we can assume the day is not interactive.
  if (interactiveProps.every((name) => !(name in originalProps))) {
    return false;
  }

  // The day is NOT interactive if not in the range specified in the `fromDate`
  // and `toDate` (these values are set also by `fromDay/toDay` and
  // `fromYear/toYear` in the main component.)
  const isAfterToDate = toDate && isAfter(day, toDate);
  const isBeforeFromDate = fromDate && isBefore(day, fromDate);
  const interactive = !isAfterToDate && !isBeforeFromDate && !outside;
  return interactive;
}

/** Determines if a day is "today". */
function isToday(day: Date, _: Date, props: DayPickerContextValue): boolean {
  // User can change the "today" date from props, thus we cannot rely to the
  // date now. The today props defaults to `new Date()` anyway...
  return isSameDay(day, props.today);
}

export const defaultModifiers: ModifiersMatchers = {
  interactive: isInteractive,
  outside: isOutside,
  today: isToday
};
