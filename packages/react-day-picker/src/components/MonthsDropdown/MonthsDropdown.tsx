import * as React from 'react';

import { isSameYear, setMonth, startOfMonth } from 'date-fns';

import { useDayPicker } from '../../hooks';
import { UIElement } from '../../types';

/**
 * The props for the [[MonthsDropdown]] component.
 */
export interface MonthsDropdownProps {
  /** The month where the dropdown is displayed. */
  displayMonth: Date;
}

/**
 * Render the dropdown to navigate between months.
 */
export function MonthsDropdown(props: MonthsDropdownProps): JSX.Element {
  const { displayMonth } = props;
  const {
    locale,
    onMonthChange,
    fromDate,
    toDate,
    classNames,
    styles,
    components: { Dropdown },
    formatters: { formatMonthCaption }
  } = useDayPicker();

  const dropdownMonths: Date[] = [];

  if (fromDate && toDate) {
    if (isSameYear(fromDate, toDate)) {
      // only display the months included in the range
      for (
        let month = fromDate.getMonth();
        month <= toDate.getMonth();
        month++
      ) {
        dropdownMonths.push(setMonth(startOfMonth(fromDate), month));
      }
    } else {
      // display all the 12 months
      for (let month = 0; month <= 11; month++) {
        const anyDate = new Date(); // any date is OK, we just need the year
        dropdownMonths.push(setMonth(startOfMonth(anyDate), month));
      }
    }
  }

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newMonth = new Date(displayMonth);
    newMonth.setMonth(Number(e.target.value));
    onMonthChange?.(newMonth, e);
  };

  return (
    <Dropdown
      className={classNames[UIElement.DropdownMonth]}
      style={styles?.[UIElement.DropdownMonth]}
      onChange={handleChange}
      value={displayMonth.getMonth()}
      caption={formatMonthCaption(displayMonth, { locale })}
    >
      {dropdownMonths.map((m) => (
        <option key={m.getMonth()} value={m.getMonth()}>
          {formatMonthCaption(m, { locale })}
        </option>
      ))}
    </Dropdown>
  );
}
