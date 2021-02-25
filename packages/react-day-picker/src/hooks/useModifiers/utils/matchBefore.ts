import { differenceInCalendarDays } from 'date-fns';

import { Matcher } from '../../../types';

export function matchBefore(day: Date, matcher: Matcher): boolean {
  if (!('before' in matcher) || 'after' in matcher) return false;
  return differenceInCalendarDays(day, matcher.before) < 0;
}
