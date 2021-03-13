import React from 'react';

import { useDayPicker } from 'contexts';

import { NavigationProps } from './NavigationProps';
import { Button } from 'components';

/** A component rendering the navigation buttons or the drop-downs. */
export function Navigation(props: NavigationProps): JSX.Element {
  const {
    dir,
    locale,
    classNames,
    styles,
    labels: { labelPrevious, labelNext },
    components: { IconNext, IconPrevious }
  } = useDayPicker();
  let { onPreviousClick, onNextClick } = props;
  if (dir === 'rtl') {
    [onNextClick, onPreviousClick] = [onPreviousClick, onNextClick];
  }

  const { previousMonth, nextMonth } = props;

  const previousLabel = previousMonth
    ? labelPrevious(previousMonth, { locale })
    : '';
  const previousClassName = [
    classNames.nav_button,
    classNames.nav_button_previous
  ].join(' ');

  const nextLabel = nextMonth ? labelNext(nextMonth, { locale }) : '';
  const nextClassName = [
    classNames.nav_button,
    classNames.nav_button_previous
  ].join(' ');

  const previousButton = (
    <Button
      key="prev"
      aria-label={previousLabel}
      className={previousClassName}
      style={styles.nav_button_previous}
      disabled={!previousMonth}
      onClick={onPreviousClick}
    >
      <IconPrevious className={classNames.nav_icon} style={styles.nav_icon} />
    </Button>
  );

  const nextButton = (
    <Button
      key="next"
      aria-label={nextLabel}
      className={nextClassName}
      disabled={!nextMonth}
      onClick={onNextClick}
      style={styles.nav_button_next}
    >
      <IconNext className={classNames.nav_icon} style={styles.nav_icon} />
    </Button>
  );
  if (!nextMonth && !previousMonth) {
    return <></>;
  }
  return (
    <div className={classNames.nav} style={styles.nav}>
      {!props.hidePrevious && (dir === 'rtl' ? nextButton : previousButton)}
      {!props.hideNext && (dir === 'rtl' ? previousButton : nextButton)}
    </div>
  );
}
