import React from 'react';

import { DayContentProps } from './DayContentProps';

/**
 * Render the content of the day cell.
 */
export function DayContent(props: DayContentProps): JSX.Element {
  if (props.outside && !props.showOutsideDays) return <></>;
  if (props.modifiers.hidden) return <></>;

  return (
    <>
      <span className={props.hiddenClassName}>{props['aria-label']}</span>
      <span aria-hidden="true">
        {props.format(props.date, { locale: props.locale })}
      </span>
    </>
  );
}
