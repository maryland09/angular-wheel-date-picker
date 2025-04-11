import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import dayjs from "dayjs";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'angular-wheel-date-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-wheel-date-picker.component.html',
  styleUrls: ['./angular-wheel-date-picker.component.scss'],
})
export class AngularWheelDatePickerComponent implements OnInit, AfterViewInit {
  @ViewChild('yearWheel') yearWheel!: ElementRef;
  @ViewChild('monthWheel') monthWheel!: ElementRef;
  @ViewChild('dayWheel') dayWheel!: ElementRef;

  @Input() minYear: number = new Date().getFullYear() - 50;
  @Input() maxYear: number = new Date().getFullYear() + 10;

  @Output() dateChange = new EventEmitter<Date>();

  years: string[] = [];
  months: string[] = [];
  selectedYear: string = '';
  selectedMonth: string = '';
  selectedDay: string = '';
  days: string[] = [];

  ngOnInit() {
    this.generateYears();
    this.generateMonths();
    this.updateDays();
  }

  ngAfterViewInit() {
    this.centerSelectedItem(this.yearWheel.nativeElement, this.years);
    this.centerSelectedItem(this.monthWheel.nativeElement, this.months);
    this.centerSelectedItem(this.dayWheel.nativeElement, this.days);
  }

  generateYears() {
    const currentYear = new Date().getFullYear();
    const startYear = this.minYear;
    const endYear = this.maxYear;

    this.years = Array.from({length: endYear - startYear + 1}, (_, index) => (startYear + index).toString());
    this.years = this.addEmptyValues(this.years);
  }

  generateMonths() {
    const format = 'MMMM';
    this.months = Array.from({length: 12}, (_, index) => dayjs().month(index).format(format));
    this.months = this.addEmptyValues(this.months);
  }

  centerSelectedItem(wheel: HTMLElement, items: string[]) {
    wheel.scrollTop = wheel.scrollHeight / 2;
    this.updateSelectedValue(wheel, items);
  }

  updateDays() {
    const monthIndex = this.months.indexOf(this.selectedMonth) - 2;
    const year = parseInt(this.selectedYear, 10);

    const daysInMonth = this.getDaysInMonth(year, monthIndex);
    this.days = Array.from({length: daysInMonth}, (_, i) => (i + 1).toString());
    this.days = this.addEmptyValues(this.days);
    if (parseInt(this.selectedDay, 10) > daysInMonth) {
      this.selectedDay = daysInMonth.toString();
    }
  }

  getDaysInMonth(year: number, monthIndex: number): number {
    return dayjs(new Date(year, monthIndex)).daysInMonth();
  }

  onScroll() {
    this.updateSelectedValue(this.yearWheel.nativeElement, this.years);
    this.updateSelectedValue(this.monthWheel.nativeElement, this.months);
    this.updateSelectedValue(this.dayWheel.nativeElement, this.days);
  }

  updateSelectedValue(wheel: HTMLElement, items: string[]) {
    const itemHeight = wheel.children[0].clientHeight;
    const middleOffset = wheel.scrollTop + wheel.offsetHeight / 2;
    const centerIndex = Math.floor(middleOffset / itemHeight);
    const selectedItem = items[Math.max(0, Math.min(centerIndex, items.length - 1))];

    if (wheel === this.yearWheel.nativeElement) {
      this.selectedYear = selectedItem;
      this.updateDays();
    } else if (wheel === this.monthWheel.nativeElement) {
      this.selectedMonth = selectedItem;
      this.updateDays();
    } else if (wheel === this.dayWheel.nativeElement) {
      this.selectedDay = selectedItem;
    }
  }

  selectDate() {
    const date = new Date(+this.selectedYear, this.months.indexOf(this.selectedMonth) - 2, parseInt(this.selectedDay, 10));
    this.dateChange.emit(date);
  }

  addEmptyValues = (arr: string[]): string[] => [' ', ' ', ...arr, ' ', ' '];

}
