import * as React from 'react';

import { isSameMonth } from 'date-fns';

import {
  useDayPicker,
  useSelectMultiple,
  useSelectRange,
  useSelectSingle
} from 'contexts';
import { useModifiers } from 'hooks';

import { DayProps } from './DayProps';
import { useDayFocus } from './hooks/useDayFocus';
import { Button } from 'components';

/**
 * The content of a day cell – as a button or span element according to its
 * modifiers.
 */
export function Day(props: DayProps): JSX.Element | null {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const { date, displayMonth } = props;

  const { ...context } = useDayPicker();

  const { isSingleMode, ...single } = useSelectSingle();
  const { isMultipleMode, ...multiple } = useSelectMultiple();
  const { isRangeMode, ...range } = useSelectRange();

  const { focus, blur, focusOnKeyDown, isFocused } = useDayFocus(
    date,
    buttonRef
  );
  const {
    modifiers,
    modifierClassNames: modifierClassNames,
    modifierStyle
  } = useModifiers(date);

  const {
    components: { DayContent },
    formatters: { formatDay },
    labels: { labelDay },
    locale,
    showOutsideDays
  } = context;

  if (modifiers.hidden) return <></>;

  const ariaLabel = labelDay(date, modifiers, { locale });
  const ariaPressed = modifiers.selected;

  // #region Event handlers
  const handleClick: React.MouseEventHandler = (e) => {
    if (isSingleMode) {
      single.handleDayClick?.(date, modifiers, e);
    } else if (isMultipleMode) {
      multiple.handleDayClick?.(date, modifiers, e);
    } else if (isRangeMode) {
      range.handleDayClick?.(date, modifiers, e);
    }
    context.onDayClick?.(date, modifiers, e);
  };

  const handleFocus: React.FocusEventHandler = (e) => {
    focus(date);
    context.onDayFocus?.(date, modifiers, e);
  };

  const handleBlur: React.FocusEventHandler = (e) => {
    blur();
    context.onDayBlur?.(date, modifiers, e);
  };

  const handleKeyDown: React.KeyboardEventHandler = (e) => {
    focusOnKeyDown(e);
    context.onDayKeyDown?.(date, modifiers, e);
  };

  const handleKeyUp: React.KeyboardEventHandler = (e) => {
    context.onDayKeyUp?.(date, modifiers, e);
  };
  const handleMouseEnter: React.MouseEventHandler = (e) => {
    context.onDayMouseEnter?.(date, modifiers, e);
  };
  const handleMouseLeave: React.MouseEventHandler = (e) => {
    context.onDayMouseLeave?.(date, modifiers, e);
  };
  const handleTouchCancel: React.TouchEventHandler = (e) => {
    context.onDayTouchCancel?.(date, modifiers, e);
  };
  const handleTouchEnd: React.TouchEventHandler = (e) => {
    context.onDayTouchEnd?.(date, modifiers, e);
  };
  const handleTouchMove: React.TouchEventHandler = (e) => {
    context.onDayTouchMove?.(date, modifiers, e);
  };
  const handleTouchStart: React.TouchEventHandler = (e) => {
    context.onDayTouchStart?.(date, modifiers, e);
  };

  // #endregion

  const classNames = [context.classNames.day].concat(modifierClassNames);
  const style = { ...context.styles.day, ...modifierStyle };

  const isOutside = !isSameMonth(date, displayMonth);
  if (isOutside) {
    classNames.push(context.classNames.day_outside);
  }
  const className = classNames.join(' ');

  const dayContent = (
    <DayContent
      aria-label={ariaLabel}
      date={date}
      displayMonth={displayMonth}
      format={formatDay}
      hiddenClassName={context.classNames.hidden}
      locale={locale}
      modifiers={modifiers}
      outside={isOutside}
      showOutsideDays={showOutsideDays}
    />
  );

  const isDisabled = modifiers.disabled || isOutside;
  const isInteractive =
    isSingleMode ||
    isMultipleMode ||
    isRangeMode ||
    context.onDayClick !== undefined;

  const tabIndex = isDisabled || isFocused || !isInteractive ? -1 : 0;

  if (!isInteractive) {
    return (
      <div style={style} className={className}>
        {dayContent}
      </div>
    );
  }

  return (
    <Button
      ref={buttonRef}
      aria-pressed={ariaPressed}
      style={style}
      disabled={isDisabled}
      className={className}
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
      {dayContent}
    </Button>
  );
}
