import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsOverviewComponent } from './inputs-overview.component';

describe('InputsOverviewComponent', () => {
  let component: InputsOverviewComponent;
  let fixture: ComponentFixture<InputsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputsOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
