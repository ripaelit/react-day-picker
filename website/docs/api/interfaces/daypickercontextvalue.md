---
id: "daypickercontextvalue"
title: "Interface: DayPickerContextValue"
sidebar_label: "DayPickerContextValue"
custom_edit_url: null
hide_title: true
---

# Interface: DayPickerContextValue

Represent the value of a DayPicker context.

## Hierarchy

* *Omit*<[*DayPickerProps*](daypickerprops.md), *className* \| *style* \| *month* \| *fromMonth* \| *toMonth* \| *fromYear* \| *toYear*\>

  ↳ **DayPickerContextValue**

## Properties

### captionLayout

• **captionLayout**: [*CaptionLayout*](../types/captionlayout.md)

___

### classNames

• **classNames**: [*ClassNames*](../types/classnames.md)

___

### components

• **components**: *Required*<[*Components*](../types/components.md)\>

___

### defaultMonth

• `Optional` **defaultMonth**: *undefined* \| Date

The initial month to show in the calendar. Default is the current month.

___

### defaultSelected

• `Optional` **defaultSelected**: *undefined* \| Date \| Date[] \| [*DateRange*](../types/daterange.md)

The default selected day(s).

___

### dir

• `Optional` **dir**: *undefined* \| *string*

The text direction of the calendar. Use `ltr` for left-to-right (default)
or `rtl` for right-to-left.

**Example**

When setting the calendar to Arabic, using `dir` to enable right-to-left
direction.

```
import arabic from 'date-fns/locale/ar-SA';

function Example() {
  return <DayPicker locale={arabic} dir="rtl" />;
}
```

___

### disableNavigation

• `Optional` **disableNavigation**: *undefined* \| *boolean*

Disable the navigation between months.

___

### disabled

• `Optional` **disabled**: *undefined* \| Date \| [*DateAfter*](../types/dateafter.md) \| [*DateBefore*](../types/datebefore.md) \| [*DateBeforeAfter*](../types/datebeforeafter.md) \| [*DateRange*](../types/daterange.md) \| [*MatchDate*](../types/matchdate.md) \| [*MatchDaysOfWeek*](../types/matchdaysofweek.md) \| [*Matcher*](../types/matcher.md)[]

Apply the `disabled` modifier to the matching days.

**Example**

```
function Example() {
  return (
    <DayPicker
      defaultMonth={new Date(2021, 11)}
      disabled={{
        from: new Date(2021, 11, 14),
        to: new Date(2021, 11, 24)
      }}
    />
  );
}
```

___

### enableOutsideDaysClick

• `Optional` **enableOutsideDaysClick**: *undefined* \| *boolean*

Enable the day click event for outside days when [showOutsideDays](daypickercontextvalue.md#showoutsidedays) is set.
Default to `false`.

___

### fixedWeeks

• `Optional` **fixedWeeks**: *undefined* \| *boolean*

Display six weeks per months, regardless the month’s number of weeks.

To use this prop, [showOutsideDays](daypickercontextvalue.md#showoutsidedays) must be set. Default to `false`.

**Example**

```
function Example() {
 return <DayPicker showOutsideDays fixedWeeks />
};
```

___

### formatters

• **formatters**: *Required*<[*Formatters*](../types/formatters.md)\>

___

### fromDate

• `Optional` **fromDate**: *undefined* \| Date

The earliest day to start the month navigation.

___

### hidden

• `Optional` **hidden**: *undefined* \| Date \| [*DateAfter*](../types/dateafter.md) \| [*DateBefore*](../types/datebefore.md) \| [*DateBeforeAfter*](../types/datebeforeafter.md) \| [*DateRange*](../types/daterange.md) \| [*MatchDate*](../types/matchdate.md) \| [*MatchDaysOfWeek*](../types/matchdaysofweek.md) \| [*Matcher*](../types/matcher.md)[]

Apply the `hidden` modifier to the matching days – to hide them from the
calendar.

**Example**

```
function Example() {
  return (
    <DayPicker
      defaultMonth={new Date(2021, 11)}
      hidden={{
        from: new Date(2021, 11, 14),
        to: new Date(2021, 11, 24)
      }}
    />
  );
}
```

___

### hideHead

• `Optional` **hideHead**: *undefined* \| *boolean*

Hide the month’s head displaying the weekday names.

**Example**

```
function Example() {
 return <DayPicker hideHead />
};
```

___

### labels

• **labels**: *Required*<[*Labels*](../types/labels.md)\>

___

### locale

• **locale**: Locale

___

### mode

• `Optional` **mode**: *undefined* \| *uncontrolled* \| *single* \| *multiple* \| *range*

The selection mode.

- `single` (default) allows selecting only a single day
- `multiple` allows selecting multiple days
- `range` allows selecting a range of days
- `uncontrolled`: set the selections using the `selected` prop

**Example**

When setting to `uncontrolled`, handle the selection in the parent
component’ state:

```
function Example() {
 const [day, setDay] = useState(new Date());
 return (
   <DayPicker mode="uncontrolled" selected={day} onDayClick={setDay} />
 )
};
```

___

### modifierClassNames

• `Optional` **modifierClassNames**: *undefined* \| [*ModifierClassNames*](../types/modifierclassnames.md)

___

### modifierPrefix

• **modifierPrefix**: *string*

___

### modifierStyles

• `Optional` **modifierStyles**: *undefined* \| [*ModifierStyles*](../types/modifierstyles.md)

Change the inline style for the day matching the [modifiers](daypickercontextvalue.md#modifiers).

**Example**

Change the background color of the days matching the `isToday` modifier.

```
<DayPicker
 modifiers={{ isToday: new Date() }}
 modifierStyles={{ isToday: { backgroundColor: 'purple' } }}
/>
```

___

### modifiers

• **modifiers**: [*ModifierMatchers*](../types/modifiermatchers.md)

___

### numberOfMonths

• **numberOfMonths**: *number*

___

### onDayBlur

• **onDayBlur**: [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

Handle focus behavior. Calls the original `onDayBlur` passed from props.

___

### onDayClick

• **onDayClick**: [*DayClickEventHandler*](../types/dayclickeventhandler.md)

Handle click behavior. Calls the original `onDayClick` passed from props.

___

### onDayFocus

• **onDayFocus**: [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

Handle focus behavior. Calls the original `onDayFocus` passed from props.

___

### onDayKeyDown

• **onDayKeyDown**: [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

Handle keyboard navigation. Calls the original `onDayKeyDown` passed from props.

___

### onDayKeyPress

• `Optional` **onDayKeyPress**: *undefined* \| [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

___

### onDayKeyUp

• `Optional` **onDayKeyUp**: *undefined* \| [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

___

### onDayMouseEnter

• `Optional` **onDayMouseEnter**: *undefined* \| [*DayMouseEventHandler*](../types/daymouseeventhandler.md)

Event fired when the mouse enters the day button.

___

### onDayMouseLeave

• `Optional` **onDayMouseLeave**: *undefined* \| [*DayMouseEventHandler*](../types/daymouseeventhandler.md)

Event fired when the mouse leaves the day button.

___

### onDayTouchCancel

• `Optional` **onDayTouchCancel**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

___

### onDayTouchEnd

• `Optional` **onDayTouchEnd**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

___

### onDayTouchMove

• `Optional` **onDayTouchMove**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

___

### onDayTouchStart

• `Optional` **onDayTouchStart**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

___

### onMonthChange

• **onMonthChange**: [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

Will set the current month if DayPicker is in controlled mode. Calls the
original `onMonthChange`.

This event handler will do nothing if the passed month is outside the
allowed months.

___

### onNextClick

• `Optional` **onNextClick**: *undefined* \| [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

___

### onPrevClick

• `Optional` **onPrevClick**: *undefined* \| [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

___

### onSelect

• `Optional` **onSelect**: *undefined* \| [*SelectEventHandler*](selecteventhandler.md)

Event fired when a day is selected.

**Note:** This event is disabled when `mode='uncontrolled'`.

___

### onSelectMultiple

• `Optional` **onSelectMultiple**: *undefined* \| [*SelectMultipleEventHandler*](../types/selectmultipleeventhandler.md)

Event fired when multiple days are selected.

**Note:** This event is disabled when `mode='uncontrolled'`.

___

### onSelectRange

• `Optional` **onSelectRange**: *undefined* \| [*SelectRangeEventHandler*](../types/selectrangeeventhandler.md)

Event fired when a range of days is selected.

**Note:** This event is disabled when `mode='uncontrolled'`.

___

### onWeekNumberClick

• `Optional` **onWeekNumberClick**: *undefined* \| [*WeekNumberClickEventHandler*](../types/weeknumberclickeventhandler.md)

___

### originalProps

• **originalProps**: [*DayPickerProps*](daypickerprops.md)

A reference to the original props passed to the component. Useful for
inspecting in internal components.

___

### pagedNavigation

• `Optional` **pagedNavigation**: *undefined* \| *boolean*

Paginate the month navigation displaying the [numberOfMonths](daypickercontextvalue.md#numberofmonths) at time.

**Example**

```
function Example() {
 return <DayPicker numberOfMonths={3} pagedNavigation />
};
```

___

### required

• `Optional` **required**: *undefined* \| *boolean*

When the selection type is controlled, require at least one day to be selected.

___

### reverseMonths

• `Optional` **reverseMonths**: *undefined* \| *boolean*

Render the months in reversed order (when [numberOfMonths](daypickercontextvalue.md#numberofmonths) is greater
than `1`) to display the most recent month first.

**Example**

```
function Example() {
 return <DayPicker numberOfMonths={5} reverseMonths />
};
```

___

### selected

• `Optional` **selected**: *undefined* \| Date \| [*DateAfter*](../types/dateafter.md) \| [*DateBefore*](../types/datebefore.md) \| [*DateBeforeAfter*](../types/datebeforeafter.md) \| [*DateRange*](../types/daterange.md) \| [*MatchDate*](../types/matchdate.md) \| [*MatchDaysOfWeek*](../types/matchdaysofweek.md) \| [*Matcher*](../types/matcher.md)[]

Apply the `selected` modifier to the matching days.

**Example**

```
function Example() {
  return (
    <DayPicker
      defaultMonth={new Date(2021, 11)}
      selected={{
        from: new Date(2021, 11, 14),
        to: new Date(2021, 11, 24)
      }}
    />
  );
}
```

___

### showOutsideDays

• `Optional` **showOutsideDays**: *undefined* \| *boolean*

Show the outside days.  An outside day is a day falling in the next or the
previous month. Default is `false`.

Outside days are not interactive as default. Use [enableOutsideDaysClick](daypickercontextvalue.md#enableoutsidedaysclick)
to make them clickable.

**Example**

```
function Example() {
 return <DayPicker showOutsideDays />
};
```

___

### showWeekNumber

• `Optional` **showWeekNumber**: *undefined* \| *boolean*

Show the week numbers column. Default to `false`.

**Example**

```
function Example() {
 return <DayPicker showWeekNumber />
};
```

___

### styles

• `Optional` **styles**: *undefined* \| [*Styles*](../types/styles.md)

Change the inline styles for each [UIElement](../enums/uielement.md).

___

### toDate

• `Optional` **toDate**: *undefined* \| Date

The latest day to end the month navigation.

___

### today

• **today**: Date

The today’s date used in the calendar. If not overridden from props, is the
current date.
