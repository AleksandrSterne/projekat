import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaygroundNavbarComponent } from './playground-navbar.component';

describe('PlaygroundNavbarComponent', () => {
  let component: PlaygroundNavbarComponent;
  let fixture: ComponentFixture<PlaygroundNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaygroundNavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaygroundNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
