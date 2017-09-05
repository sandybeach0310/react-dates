import React from 'react';
import { action, storiesOf } from '@storybook/react';

import CalendarDay from '../src/components/CalendarDay';
import CalendarMonth from '../src/components/CalendarMonth';
import CalendarMonthGrid from '../src/components/CalendarMonthGrid';
import DayPickerNavigation from '../src/components/DayPickerNavigation';

import { VERTICAL_ORIENTATION, VERTICAL_SCROLLABLE } from '../constants';

storiesOf('withStyles', module)
  .addWithInfo('CalendarDay', () => (
    <table>
      <tr>
        <CalendarDay />
        <CalendarDay isOutsideDay modifiers={new Set(['highlighted'])} />
        <CalendarDay modifiers={new Set(['highlighted'])} />
        <CalendarDay modifiers={new Set(['minimum-nights'])} />
        <CalendarDay modifiers={new Set(['selected-span'])} />
        <CalendarDay modifiers={new Set(['selected'])} />
        <CalendarDay modifiers={new Set(['selected-start'])} />
        <CalendarDay modifiers={new Set(['selected-end'])} />
        <CalendarDay modifiers={new Set(['hovered-span'])} />
        <CalendarDay modifiers={new Set(['after-hovered-start'])} />
        <CalendarDay modifiers={new Set(['blocked-calendar'])} />
        <CalendarDay modifiers={new Set(['blocked-out-of-range'])} />
      </tr>
    </table>
  ))
  .addWithInfo('CalendarMonth', () => (
    <CalendarMonth
      isVisible
    />
  ))
  .addWithInfo('CalendarMonthGrid', () => (
    <CalendarMonthGrid />
  ))
  .addWithInfo('DayPickerNavigation', () => (
    <div>
      <div style={{ border: '1px solid black', position: 'relative', height: 200, width: 300 }}>
        <DayPickerNavigation
          onPrevMonthClick={action('onPrevMonthClick')}
          onNextMonthClick={action('onNextMonthClick')}
        />
      </div>

      <div style={{ border: '1px solid black', position: 'relative', height: 200, width: 300 }}>
        <DayPickerNavigation orientation={VERTICAL_ORIENTATION} />
      </div>

      <div style={{ border: '1px solid black', position: 'relative', height: 200, width: 300 }}>
        <DayPickerNavigation orientation={VERTICAL_SCROLLABLE} />
      </div>
    </div>
  ));
