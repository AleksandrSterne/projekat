import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInputsPageComponent } from './date-inputs-page.component';

describe('DateInputsPageComponent', () => {
  let component: DateInputsPageComponent;
  let fixture: ComponentFixture<DateInputsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateInputsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateInputsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
