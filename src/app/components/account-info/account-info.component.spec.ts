import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountInfoComponent } from './account-info.component';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../services/user.model';

describe('AccountInfoComponent', () => {
  let component: AccountInfoComponent;
  let fixture: ComponentFixture<AccountInfoComponent>;
  let mockUser$: BehaviorSubject<User> = new BehaviorSubject<User>({
    id: 5223,
    username: 'Mock user',
    password: 'Mock password',
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountInfoComponent);
    component = fixture.componentInstance;
    component.currentUser$ = mockUser$.asObservable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render account info container', () => {
    const accountInfoContainer = fixture.debugElement.query(
      By.css('[data-testid="account-info"]')
    );

    expect(accountInfoContainer).toBeTruthy();
  });

  it('should render account info header', () => {
    const accountInfoHeader = fixture.debugElement.query(
      By.css('[data-testid="account-info-header"]')
    );

    expect(accountInfoHeader).toBeTruthy();

    expect(accountInfoHeader.nativeElement.textContent).toContain('User info');
  });

  it('should render account info body', () => {
    const accountInfoBody = fixture.debugElement.query(
      By.css('[data-testid="account-info-body"]')
    );

    expect(accountInfoBody).toBeTruthy();
  });

  it('should show correct user info', () => {
    const accountId = fixture.debugElement.query(
      By.css('[data-testid="account-id"]')
    );
    const accountUsername = fixture.debugElement.query(
      By.css('[data-testid="account-username"]')
    );
    const accountPassword = fixture.debugElement.query(
      By.css('[data-testid="account-password"]')
    );

    expect(accountId.nativeElement.textContent).toContain(
      `Id: ${mockUser$.value.id}`
    );

    expect(accountUsername.nativeElement.textContent).toContain(
      `Username: ${mockUser$.value.username}`
    );

    expect(accountPassword.nativeElement.textContent).toContain(
      `Password: ${mockUser$.value.password}`
    );
  });
});
