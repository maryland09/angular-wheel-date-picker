# Angular Wheel Date Picker

A date picker component for Angular applications that features a scrollable wheel interface similar to native mobile date pickers.

## Features

- Intuitive wheel-style date selection
- Smooth scrolling experience
- Mobile-friendly touch interface
- Customizable year range

## Installation
npm install angular-wheel-date-picker --save

## Basic Usage

```typescript
import {Component} from '@angular/core';
import {AngularWheelDatePicker} from "angular-wheel-date-picker";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AngularWheelDatePicker,
    DatePipe
  ],
  template: `
    <angular-wheel-date-picker
      [minYear]="1960"
      [maxYear]="2040"
      (dateChange)="selectDate($event)">
    </angular-wheel-date-picker>
    <p>Selected date: {{ myDate | date: 'dd/MM/yyyy' }}<p>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  myDate?: Date;

  selectDate(date: Date) {
    this.myDate = date;
  }
}
```

## Inputs
| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `minYear` | number | Current year - 50 | Minimum year displayed in the year wheel |
| `maxYear` | number | Current year + 10 | Maximum year displayed in the year wheel |

## Outputs

| Output | Type               | Description |
|--------|--------------------|-------------|
| `dateChange` | EventEmitter&lt;Date&gt; | Emits the selected date when the user changes it |


# Requirements

- Angular 15.0.0 or higher
- dayjs

# Browser Support
This component supports all modern browsers.

# Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

# License
MIT
