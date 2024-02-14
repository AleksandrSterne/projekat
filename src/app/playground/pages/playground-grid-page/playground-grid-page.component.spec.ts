import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaygroundGridPageComponent } from './playground-grid-page.component';

describe('PlaygroundGridPageComponent', () => {
  let component: PlaygroundGridPageComponent;
  let fixture: ComponentFixture<PlaygroundGridPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaygroundGridPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaygroundGridPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
