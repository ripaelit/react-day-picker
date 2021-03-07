import * as React from 'react';

import { Table } from 'components';
import { useDayPicker, useNavigation } from 'hooks';
import { StyledComponentProps } from 'types';

/**
 * Render the container with the months and their captions. The number of months
 * rendered depends by the `numberOfMonths` prop.
 */
export function Root(props: StyledComponentProps): JSX.Element {
  const { className, style } = props;
  const {
    dir,
    classNames,
    styles,
    numberOfMonths,
    showWeekNumber,
    components: { Caption }
  } = useDayPicker();

  const { displayMonths } = useNavigation();

  const rootClassNames = [classNames.root];
  if (numberOfMonths > 1) {
    rootClassNames.push(classNames.multiple_month);
  }
  if (showWeekNumber) {
    rootClassNames.push(classNames.with_weeknumber);
  }
  if (className) rootClassNames.concat(className.split(' '));

  const renderMonth = (displayMonth: Date, displayIndex: number) => {
    const className = [classNames.month];
    const style = { ...styles.month };
    let isFirst = numberOfMonths > 1 && displayIndex === 0;
    let isLast =
      numberOfMonths > 1 && displayIndex === displayMonths.length - 1;

    if (dir === 'rtl') [isLast, isFirst] = [isFirst, isLast];

    const isMiddle = numberOfMonths > 1 && !isFirst && !isLast;

    if (isFirst) {
      className.push(classNames.caption_first);
      Object.assign(style, styles.caption_first);
    }
    if (isLast) className.push(classNames.caption_last);
    if (isMiddle) className.push(classNames.caption_middle);

    return (
      <div key={displayIndex} className={className.join(' ')} style={style}>
        <Caption
          displayMonth={displayMonth}
          displayIndex={displayIndex}
          isFirst={isFirst}
          isLast={isLast}
          isMiddle={isMiddle}
        />
        <Table displayMonth={displayMonth} />
      </div>
    );
  };

  return (
    <div
      className={rootClassNames.join(' ')}
      style={{ ...styles.root, ...style }}
      dir={dir}
    >
      <div className={classNames.months} style={styles.months}>
        {displayMonths.map(renderMonth)}
      </div>
    </div>
  );
}
