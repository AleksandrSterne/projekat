import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInputsOverviewComponent } from './date-inputs-overview.component';

describe('DateInputsOverviewComponent', () => {
  let component: DateInputsOverviewComponent;
  let fixture: ComponentFixture<DateInputsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateInputsOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateInputsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
