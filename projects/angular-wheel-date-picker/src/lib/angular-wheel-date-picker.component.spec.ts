import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWheelDatePickerComponent } from './angular-wheel-date-picker.component';

describe('AngularWheelDatePickerComponent', () => {
  let component: AngularWheelDatePickerComponent;
  let fixture: ComponentFixture<AngularWheelDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularWheelDatePickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularWheelDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
