import * as DateFns from "date-fns";
import { MatchingModifiers, DayPickerProps } from "../DayPicker";

/**
 * The props used by the [[Day]] component.
 */
export interface DayProps {
  /**
   * The day to display in the calendar.
   */
  day: Date;
  /**
   * The modifiers that matches the given day.
   */
  modifiers: MatchingModifiers;
  /**
   * Reference to the props used by the DayPicker component.
   */
  dayPickerProps: DayPickerProps;
}

/**
 * A function that format the day for the [[Day]] component.
 */
export type DayFormatter = (
  day: Date,
  options?: { locale?: DateFns.Locale }
) => string;

export type DayContainerHtmlProps = {
  "aria-disabled"?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  style?: React.CSSProperties;
};

export type DayWrapperHtmlProps = {
  className?: string;
  style?: React.CSSProperties;
};

export type DayHtmlProps = {
  containerProps: DayContainerHtmlProps;
  wrapperProps: DayWrapperHtmlProps;
};
