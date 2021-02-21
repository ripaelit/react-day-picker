import { differenceInCalendarDays } from 'date-fns';

import { Matcher } from '../../../types';

export function matchAfter(day: Date, matcher: Matcher): boolean {
  if (!('after' in matcher) || 'before' in matcher) return false;
  return differenceInCalendarDays(day, matcher.after) > 0;
}
