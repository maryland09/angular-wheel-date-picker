import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from "@angular/common";
import { AngularWheelDatePicker } from "../../../angular-wheel-date-picker/src/lib/angular-wheel-date-picker.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AngularWheelDatePicker,
    DatePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-wheel-date-picker-demo';
  myDate?: Date;

  selectDate(date: Date) {
    this.myDate = date;
  }
}
