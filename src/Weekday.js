import React from 'react';
import PropTypes from './PropTypes';

export default function Weekday({
  weekday,
  className,
  weekdaysLong,
  weekdaysShort,
  localeUtils,
  locale,
}) {
  let title;
  if (weekdaysLong) {
    title = weekdaysLong[weekday];
  } else {
    title = localeUtils.formatWeekdayLong(weekday, locale);
  }
  let content;
  if (weekdaysShort) {
    content = weekdaysShort[weekday];
  } else {
    content = localeUtils.formatWeekdayShort(weekday, locale);
  }

  return (
    <div className={className} role="columnheader">
      <abbr title={title}>
        {content}
      </abbr>
    </div>
  );
}

export const WeekdayPropTypes = {
  weekday: PropTypes.number,
  className: PropTypes.string,
  locale: PropTypes.string,
  localeUtils: PropTypes.localeUtils,

  weekdaysLong: PropTypes.arrayOf(PropTypes.string),
  weekdaysShort: PropTypes.arrayOf(PropTypes.string),
};

Weekday.propTypes = WeekdayPropTypes;
