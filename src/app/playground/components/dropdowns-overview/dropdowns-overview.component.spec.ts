import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownsOverviewComponent } from './dropdowns-overview.component';

describe('DropdownsOverviewComponent', () => {
  let component: DropdownsOverviewComponent;
  let fixture: ComponentFixture<DropdownsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownsOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
