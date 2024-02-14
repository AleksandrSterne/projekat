import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaygroundButtonsPageComponent } from './playground-buttons-page.component';

describe('PlaygroundButtonsPageComponent', () => {
  let component: PlaygroundButtonsPageComponent;
  let fixture: ComponentFixture<PlaygroundButtonsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaygroundButtonsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaygroundButtonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
