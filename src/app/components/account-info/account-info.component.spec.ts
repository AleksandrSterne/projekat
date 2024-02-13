import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountInfoComponent } from './account-info.component';
import { By } from '@angular/platform-browser';
import { User } from '../../services/user.model';

describe('AccountInfoComponent', () => {
  let component: AccountInfoComponent;
  let fixture: ComponentFixture<AccountInfoComponent>;
  let mockUser: User = {
    id: 5223,
    username: 'Mock user',
    password: 'Mock password',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountInfoComponent);
    component = fixture.componentInstance;
    component.data = mockUser;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Initial state', () => {
    it('should render component initial state', () => {
      let header = fixture.debugElement.queryAll(
        By.css('.__account-info .card-header h4')
      );
      let body = fixture.debugElement.queryAll(
        By.css('.__account-info .card-body div')
      );

      expect(header.length).toBe(1);
      expect(header[0].nativeElement.textContent).toContain('User info');
      expect(body.length).toBe(3);
      expect(body[0].nativeElement.textContent).toContain(`Id: ${mockUser.id}`);
      expect(body[1].nativeElement.textContent).toContain(
        `Username: ${mockUser.username}`
      );
      expect(body[2].nativeElement.textContent).toContain(
        `Password: ${mockUser.password}`
      );
    });
  });
});
