import {
  addDays,
  addWeeks,
  differenceInCalendarDays,
  endOfMonth,
  getMonth,
  getWeek,
  getWeeksInMonth,
  Locale,
  startOfMonth
} from 'date-fns';

import { getOutsideEndDays } from './getOutsideEndDays';
import { getOutsideStartDays } from './getOutsideStartDays';

/**
 * The weeks belonging to a month. Each key of the returned object is the
 * week number of the year.
 */
type MonthWeeks = { [weeknumber: string]: Date[] };

/**
 * Return the weeks belonging to the given month.
 */
export function getWeeks(
  month: Date,
  { locale, fixedWeeks }: { locale: Locale; fixedWeeks?: boolean }
): MonthWeeks {
  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(month);

  const diff = differenceInCalendarDays(monthEnd, monthStart);

  const weeks: MonthWeeks = {};
  let lastWeekStr = '';
  for (let i = 0; i <= diff; i++) {
    const date = addDays(monthStart, i);
    let week = getWeek(date, { locale });
    if (week === 1 && getMonth(date) === 11) {
      week = 53;
    }
    const weekStr: string = week.toString();

    if (!weeks[weekStr]) {
      const startDays = getOutsideStartDays(date, { locale });
      // Create a new week by adding outside start days
      weeks[weekStr] = startDays;
    }
    weeks[weekStr].push(date);
    lastWeekStr = weekStr;
  }

  let lastWeek = weeks[lastWeekStr];
  const lastDay = lastWeek[lastWeek.length - 1];
  const endDays = getOutsideEndDays(lastDay, { locale });
  weeks[lastWeekStr] = lastWeek.concat(endDays);

  // Add extra weeks to the month, up to 6 weeks
  if (fixedWeeks) {
    lastWeek = weeks[lastWeekStr];
    const lastWeekDate = lastWeek[lastWeek.length - 1];
    const weeksInMonth = getWeeksInMonth(month, { locale });
    if (weeksInMonth < 6) {
      const diffDays = differenceInCalendarDays(
        addWeeks(lastWeekDate, 6 - weeksInMonth),
        lastWeekDate
      );
      for (let i = 0; i < diffDays; i++) {
        const date = addDays(lastWeekDate, i + 1);
        let week = getWeek(date, { locale });
        if (week === 1 && getMonth(month) === 11) {
          week = 53;
        }
        if (!weeks[week]) {
          weeks[week] = [];
        }
        weeks[week.toString()].push(date);
      }
    }
  }
  return weeks;
}
