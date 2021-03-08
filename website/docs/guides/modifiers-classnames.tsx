import React, { CSSProperties } from 'react';
import { DayClickEventHandler, DayPicker } from 'react-day-picker';

export default function App() {
  const bookedDays = [new Date(2021, 5, 8), new Date(2021, 5, 9)];

  const style = `.my-booked-class { color: tomato }`;
  return (
    <>
      <head>
        <style>{style}</style>
      </head>
      <DayPicker
        defaultMonth={bookedDays[0]}
        modifiers={{
          booked: bookedDays
        }}
        modifierClassNames={{
          booked: 'my-booked-class'
        }}
      />
    </>
  );
}
