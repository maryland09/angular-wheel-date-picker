import { TestBed } from '@angular/core/testing';

import { AngularWheelDatePickerService } from './angular-wheel-date-picker.service';

describe('AngularWheelDatePickerService', () => {
  let service: AngularWheelDatePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularWheelDatePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
