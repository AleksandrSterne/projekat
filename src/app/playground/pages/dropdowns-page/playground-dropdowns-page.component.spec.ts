import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaygroundDropdownsPageComponent } from './playground-dropdowns-page.component';

describe('PlaygroundDropdownsPageComponent', () => {
  let component: PlaygroundDropdownsPageComponent;
  let fixture: ComponentFixture<PlaygroundDropdownsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaygroundDropdownsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaygroundDropdownsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
