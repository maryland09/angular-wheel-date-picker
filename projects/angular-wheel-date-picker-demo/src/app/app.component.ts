import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AngularWheelDatePickerComponent} from "angular-wheel-date-picker";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularWheelDatePickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-wheel-date-picker-demo';
}
