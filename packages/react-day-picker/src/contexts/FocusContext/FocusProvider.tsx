import * as React from 'react';

import { addDays, addMonths, addWeeks, isSameMonth } from 'date-fns';

import { useDayPicker, useNavigation } from 'contexts';

import { FocusContext } from './FocusContext';

/**
 * The provider for the [[FocusContext]]. Must wrap the DayPicker root.
 */
export function FocusProvider({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [focusedDay, setDay] = React.useState<Date | undefined>();
  const { setMonth, displayMonths } = useNavigation();
  const { numberOfMonths } = useDayPicker();

  const blur = () => setDay(undefined);
  const focus = (date: Date) => setDay(date);

  const switchMonth = (date: Date, offset: number) => {
    if (displayMonths.some((m) => isSameMonth(date, m))) return;
    if (offset < 0) {
      setMonth(addMonths(date, 1 + offset));
    } else {
      setMonth(date);
    }
  };

  const focusDayBefore = () => {
    if (!focusedDay) return;
    const before = addDays(focusedDay, -1);
    setDay(before);
    switchMonth(before, numberOfMonths * -1);
  };
  const focusDayAfter = () => {
    if (!focusedDay) return;
    const after = addDays(focusedDay, 1);
    setDay(after);
    switchMonth(after, numberOfMonths);
  };
  const focusDayUp = () => {
    if (!focusedDay) return;
    const up = addWeeks(focusedDay, -1);
    setDay(up);
    switchMonth(up, numberOfMonths * -1);
  };
  const focusDayDown = () => {
    if (!focusedDay) return;
    const down = addWeeks(focusedDay, 1);
    setDay(down);
    switchMonth(down, numberOfMonths);
  };

  const setters = {
    blur,
    focus,
    focusDayAfter,
    focusDayBefore,
    focusDayUp,
    focusDayDown
  };

  return (
    <FocusContext.Provider value={[focusedDay, setters]}>
      {children}
    </FocusContext.Provider>
  );
}
