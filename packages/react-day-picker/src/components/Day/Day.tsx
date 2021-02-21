import * as React from 'react';

import { isSameDay, isSameMonth } from 'date-fns';

import { useDayPicker, useNavigation } from '../../hooks';
import {
  DayClickEventHandler,
  DayFocusEventHandler,
  DayKeyboardEventHandler,
  DayMouseEventHandler,
  DayTouchEventHandler,
  UIElement
} from '../../types';
import { getModifiersStatus } from './utils/getModifiersStatus';

/** Represent the props used by the [[Day]] component. */
export interface DayProps {
  /** The month where the date is displayed. */
  displayMonth: Date;
  /** The date to render. */
  date: Date;
  onDayClick?: DayClickEventHandler;
  onDayFocus?: DayFocusEventHandler;
  onDayBlur?: DayFocusEventHandler;
  onDayMouseEnter?: DayMouseEventHandler;
  onDayMouseLeave?: DayMouseEventHandler;
  onDayKeyDown?: DayKeyboardEventHandler;
  onDayKeyUp?: DayKeyboardEventHandler;
  onDayKeyPress?: DayKeyboardEventHandler;
  onDayTouchCancel?: DayTouchEventHandler;
  onDayTouchEnd?: DayTouchEventHandler;
  onDayTouchMove?: DayTouchEventHandler;
  onDayTouchStart?: DayTouchEventHandler;
}

/**
 * Render the content of a date cell, as a button or span element according to
 * its modifiers. Attaches the event handlers from DayPicker context, and manage the
 * focused date.
 */
export function Day(props: DayProps): JSX.Element | null {
  const el = React.useRef<HTMLButtonElement>(null);
  const context = useDayPicker();
  const { labels, formatters, locale, showOutsideDays } = context;
  const { currentMonth, focusedDay } = useNavigation();

  const { displayMonth, date } = props;
  const { formatDay } = formatters;

  // Do not return anything if the date is not in the range
  const modifiers = getModifiersStatus(date, displayMonth, context);

  React.useEffect(() => {
    if (!focusedDay) return;
    if (isSameDay(focusedDay, date)) el?.current?.focus();
  }, [focusedDay]);

  if (modifiers.hidden) return <span />;
  if (modifiers.outside && !showOutsideDays) return <span />;

  const ariaLabel = labels.dayLabel(date, modifiers, { locale });
  const ariaPressed = modifiers.interactive ? modifiers.selected : undefined;
  const disabled = modifiers.disabled;

  // #region TabIndex
  let tabIndex: number | undefined = !modifiers.interactive ? undefined : -1;
  if (modifiers.interactive) {
    if (
      (focusedDay && isSameDay(date, focusedDay)) ||
      (isSameMonth(date, currentMonth) && date.getDate() === 1)
    ) {
      tabIndex = 0;
    }
  }
  // #endregion

  // #region EventHandlers
  const { onDayBlur, onDayClick, onDayFocus, onDayKeyDown } = context;

  const handleClick: React.MouseEventHandler = (e) => {
    onDayClick(date, modifiers, e);
  };
  const handleFocus: React.FocusEventHandler = (e) => {
    onDayFocus(date, modifiers, e);
  };
  const handleBlur: React.FocusEventHandler = (e) => {
    onDayBlur(date, modifiers, e);
  };
  const handleKeyDown: React.KeyboardEventHandler = (e) => {
    onDayKeyDown(date, modifiers, e);
  };
  const handleKeyUp: React.KeyboardEventHandler = (e) => {
    props.onDayKeyUp?.(date, modifiers, e);
  };
  const handleMouseEnter: React.MouseEventHandler = (e) => {
    props.onDayMouseEnter?.(date, modifiers, e);
  };
  const handleMouseLeave: React.MouseEventHandler = (e) => {
    props.onDayMouseLeave?.(date, modifiers, e);
  };
  const handleTouchCancel: React.TouchEventHandler = (e) => {
    props.onDayTouchCancel?.(date, modifiers, e);
  };
  const handleTouchEnd: React.TouchEventHandler = (e) => {
    props.onDayTouchEnd?.(date, modifiers, e);
  };
  const handleTouchMove: React.TouchEventHandler = (e) => {
    props.onDayTouchMove?.(date, modifiers, e);
  };
  const handleTouchStart: React.TouchEventHandler = (e) => {
    props.onDayTouchStart?.(date, modifiers, e);
  };

  // #endregion

  // #region ClassNames
  // TODO: move in an external utility?
  const { classNames, modifiersClassNames, modifierPrefix } = context;
  const buttonClassNames: (string | undefined)[] = [classNames[UIElement.Day]];
  Object.keys(modifiers)
    .filter((modifier) => Boolean(modifiers[modifier]))
    .forEach((modifier) => {
      if (modifiersClassNames?.[modifier]) {
        // Use class name coming from props
        buttonClassNames.push(modifiersClassNames[modifier]);
      } else {
        // Create a class name with the prefix
        buttonClassNames.push(`${modifierPrefix}${modifier}`);
      }
    });
  // #endregion

  // #region Styles
  // TODO: move to an external utility?
  const { styles, modifiersStyles } = context;
  let style = { ...styles?.[UIElement.Day] };
  if (styles) {
    Object.keys(modifiers).forEach((modifier) => {
      style = { ...style, ...styles[modifier] };
    });
  }
  if (modifiersStyles) {
    Object.keys(modifiers).forEach((modifier) => {
      style = { ...style, ...modifiersStyles[modifier] };
    });
  }
  // #endregion

  const Component = modifiers.interactive ? 'button' : 'span';

  return (
    <Component
      ref={el}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      disabled={disabled}
      style={style}
      className={buttonClassNames.join(' ')}
      tabIndex={tabIndex}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchCancel={handleTouchCancel}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
    >
      {formatDay(date, { locale })}
    </Component>
  );
}
