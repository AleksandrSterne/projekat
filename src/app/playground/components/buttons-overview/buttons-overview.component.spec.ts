import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsOverviewComponent } from './buttons-overview.component';

describe('ButtonsOverviewComponent', () => {
  let component: ButtonsOverviewComponent;
  let fixture: ComponentFixture<ButtonsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonsOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
