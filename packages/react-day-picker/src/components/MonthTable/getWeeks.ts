import {
  addDays,
  addWeeks,
  differenceInDays,
  endOfMonth,
  getMonth,
  getWeek,
  getWeeksInMonth,
  startOfMonth
} from "date-fns";
import { DateWithModifiers } from "../../classes/DateWithModifiers";
import { DayPickerProps } from "../DayPicker";
import { getOutsideStartDays } from "./getOutsideStartDays";
import { getOutsideEndDays } from "./getOutsideEndDays";

/**
 * The weeks belonging to a month. Each key of the returned object is the
 * week number of the year.
 *
 * @private
 */
type MonthWeeks = { [weeknumber: string]: DateWithModifiers[] };

/**
 * Return the weeks belonging to the given month.
 *
 * @private
 */
export function getWeeks(month: Date, props: DayPickerProps): MonthWeeks {
  const { locale, fixedWeeks } = props;
  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(month);

  const diff = differenceInDays(monthEnd, monthStart);

  const weeks: MonthWeeks = {};
  let lastWeekStr = "";
  for (let i = 0; i <= diff; i++) {
    const date = addDays(monthStart, i);
    const dateWithModifiers = new DateWithModifiers(date, {}, props);
    let week = getWeek(dateWithModifiers.date, { locale });
    if (week === 1 && getMonth(date) === 11) {
      week = 53;
    }
    const weekStr: string = week.toString();

    if (!weeks[weekStr]) {
      const startDays = getOutsideStartDays(dateWithModifiers, props);
      // Create a new week by adding outside start days
      weeks[weekStr] = startDays;
    }
    weeks[weekStr].push(dateWithModifiers);
    lastWeekStr = weekStr;
  }

  let lastWeek = weeks[lastWeekStr];
  const lastDay = lastWeek[lastWeek.length - 1];
  const endDays = getOutsideEndDays(lastDay, props);
  weeks[lastWeekStr] = lastWeek.concat(endDays);

  // add extra weeks to the month, up to 6 weeks
  if (fixedWeeks) {
    lastWeek = weeks[lastWeekStr];
    const lastWeekDate = lastWeek[lastWeek.length - 1].date;
    const weeksInMonth = getWeeksInMonth(month, { locale });
    if (weeksInMonth < 6) {
      const diffDays = differenceInDays(
        addWeeks(lastWeekDate, 6 - weeksInMonth),
        lastWeekDate
      );
      for (let i = 0; i < diffDays; i++) {
        const date = addDays(lastWeekDate, i + 1);
        const dateWithModifiers = new DateWithModifiers(
          date,
          { outsideend: true },
          props
        );
        let week = getWeek(date, { locale });
        if (week === 1 && getMonth(month) === 11) {
          week = 53;
        }
        if (!weeks[week]) {
          weeks[week] = [];
        }
        weeks[week.toString()].push(dateWithModifiers);
      }
    }
  }

  return weeks;
}
