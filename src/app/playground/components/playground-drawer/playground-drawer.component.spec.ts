import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaygroundDrawerComponent } from './playground-drawer.component';

describe('PlaygroundDrawerComponent', () => {
  let component: PlaygroundDrawerComponent;
  let fixture: ComponentFixture<PlaygroundDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaygroundDrawerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaygroundDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
