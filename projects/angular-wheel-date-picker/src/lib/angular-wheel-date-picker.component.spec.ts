import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWheelDatePicker } from './angular-wheel-date-picker.component';

describe('AngularWheelDatePickerComponent', () => {
  let component: AngularWheelDatePicker;
  let fixture: ComponentFixture<AngularWheelDatePicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularWheelDatePicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularWheelDatePicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
