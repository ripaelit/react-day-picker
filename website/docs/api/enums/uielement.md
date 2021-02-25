---
id: "uielement"
title: "Enumeration: UIElement"
sidebar_label: "UIElement"
custom_edit_url: null
hide_title: true
---

# Enumeration: UIElement

Represent an element or an element state of the DayPicker user interface,
whose style or class name can be changed using the `styles` or `classNames`
prop.

```
<DayPicker
  classNames={{ captionLast: 'my-custom-class' }}
  styles={{ captionLast: { color: 'red' }}}
/>
```

## Enumeration members

### Caption

• **Caption**: = "caption"

The caption element (showing the calendar heading and the navigation)

___

### CaptionBetween

• **CaptionBetween**: = "captionBetween"

The caption element is between

___

### CaptionDropdowns

• **CaptionDropdowns**: = "dropdownsContainer"

The container of the drop-downs.

___

### CaptionFirst

• **CaptionFirst**: = "captionFirst"

The caption element when the first of multiple months

___

### CaptionLabel

• **CaptionLabel**: = "captionLabel"

The container of the caption’s label (e.g. "September 2021").

___

### CaptionLast

• **CaptionLast**: = "captionLast"

The caption element when the last of multiple months

___

### Cell

• **Cell**: = "cell"

The cell containing the day element.

___

### Day

• **Day**: = "day"

The day element.

___

### Dropdown

• **Dropdown**: = "dropdown"

The drop-down select element.

___

### DropdownIcon

• **DropdownIcon**: = "dropdownIcon"

The icon aside the drop-down.

___

### DropdownMonth

• **DropdownMonth**: = "dropdownMonth"

The drop-down to change the month.

___

### DropdownYear

• **DropdownYear**: = "dropdownYear"

The drop-down to change the year.

___

### Head

• **Head**: = "head"

The head element of the table displaying the calendar.

___

### HeadCell

• **HeadCell**: = "headCell"

The cell element of the head.

___

### HeadRow

• **HeadRow**: = "headRow"

The row element of the head.

___

### Month

• **Month**: = "month"

The wrapper of the table displaying the month.

___

### Months

• **Months**: = "months"

The wrapper of the months (there may be more months visualized when `numberOfMonths`).

___

### Nav

• **Nav**: = "nav"

The navigation element.

___

### NavButton

• **NavButton**: = "navButton"

A navigation button.

___

### NavButtonNext

• **NavButtonNext**: = "navButtonNext"

The "next month" navigation button.

___

### NavButtonPrev

• **NavButtonPrev**: = "navButtonPrev"

The "previous month" navigation button.

___

### NavIcon

• **NavIcon**: = "navIcon"

The icon contained in navigation button.

___

### Outside

• **Outside**: = "outside"

The day element when outside the month

___

### Root

• **Root**: = "root"

The container element.

___

### RootMultipleMonths

• **RootMultipleMonths**: = "rootMultipleMonths"

The container element when number of months is greater than 1.

___

### Row

• **Row**: = "row"

A row in the table element (each row shows a week).

___

### RowHead

• **RowHead**: = "rowHead"

A row head in the table element, used to display the week numbers.

___

### TBody

• **TBody**: = "body"

The body element of the table displaying the calendar.

___

### Table

• **Table**: = "table"

The table displaying the calendar.

___

### Today

• **Today**: = "today"

The day element when is today

___

### WeekNumber

• **WeekNumber**: = "weekNumber"

The element containing the week number
