import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaygroundDateInputsPageComponent } from './playground-date-inputs-page.component';

describe('PlaygroundDateInputsPageComponent', () => {
  let component: PlaygroundDateInputsPageComponent;
  let fixture: ComponentFixture<PlaygroundDateInputsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaygroundDateInputsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaygroundDateInputsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
