import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaygroundInputsPageComponent } from './playground-inputs-page.component';

describe('PlaygroundInputsPageComponent', () => {
  let component: PlaygroundInputsPageComponent;
  let fixture: ComponentFixture<PlaygroundInputsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaygroundInputsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaygroundInputsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
