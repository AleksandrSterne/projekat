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
    it('should render account info container', () => {
      const accountInfoContainer = fixture.debugElement.query(
        By.css('.__account-info')
      );

      expect(accountInfoContainer).toBeTruthy();
    });

    it('should render account info header initial state', () => {
      const accountInfoHeaderContainer = fixture.debugElement.query(
        By.css('.__account-info-header-container')
      );
      const accountInfoHeader = fixture.debugElement.query(
        By.css('.__account-info-header')
      );
      const accountInfoHeaderText = fixture.debugElement.query(
        By.css('.__account-info-header-text')
      );

      expect(accountInfoHeaderContainer).toBeTruthy();
      expect(accountInfoHeader).toBeTruthy();
      expect(accountInfoHeaderText).toBeTruthy();
      expect(accountInfoHeaderText.nativeElement.textContent).toContain(
        'User info'
      );
    });

    it('should render account info body initial state', () => {
      const accountInfoBody = fixture.debugElement.query(
        By.css('.__account-info-body')
      );
      const accountId = fixture.debugElement.query(By.css('.__account-id'));
      const accountUsername = fixture.debugElement.query(
        By.css('.__account-username')
      );
      const accountPassword = fixture.debugElement.query(
        By.css('.__account-password')
      );

      expect(accountInfoBody).toBeTruthy();
      expect(accountId).toBeTruthy();
      expect(accountId.nativeElement.textContent).toContain(
        `Id: ${mockUser.id}`
      );
      expect(accountUsername).toBeTruthy();
      expect(accountUsername.nativeElement.textContent).toContain(
        `Username: ${mockUser.username}`
      );
      expect(accountPassword).toBeTruthy();
      expect(accountPassword.nativeElement.textContent).toContain(
        `Password: ${mockUser.password}`
      );
    });
  });
});
