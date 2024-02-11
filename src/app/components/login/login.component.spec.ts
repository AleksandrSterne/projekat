import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { LoginFormGroup } from './login.form';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.formRef = new LoginFormGroup();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render form group container', () => {
    const formGroupContainer = fixture.debugElement.query(
      By.css('[data-testid="form-group"]')
    );

    expect(formGroupContainer).toBeTruthy();
  });

  /** Username tests */

  it('should render username form control container', () => {
    const usernameContainer = fixture.debugElement.query(
      By.css('[data-testid="username"]')
    );

    expect(usernameContainer).toBeTruthy();
  });

  it('should render username input', () => {
    const usernameInput = fixture.debugElement.query(
      By.css('[data-testid="username-input"]')
    );

    expect(usernameInput).toBeTruthy();
  });

  it('should render username label', () => {
    const usernameLabel = fixture.debugElement.query(
      By.css('[data-testid="username-label"]')
    );

    expect(usernameLabel).toBeTruthy();
  });

  it('should not render username errors', () => {
    const usernameErrorContainer = fixture.debugElement.query(
      By.css('[data-testid="username-error"]')
    );

    expect(usernameErrorContainer).toBeFalsy();
  });

  it('should render username errors', () => {
    const usernameFormControl = component.formRef.get('username');

    usernameFormControl?.setErrors({ required: true });

    fixture.detectChanges();

    const usernameErrorContainer = fixture.debugElement.query(
      By.css('[data-testid="username-error"]')
    );

    expect(usernameErrorContainer).toBeTruthy();
  });

  /** Password tests */

  it('should render password form control container', () => {
    const passwordContainer = fixture.debugElement.query(
      By.css('[data-testid="password"]')
    );

    expect(passwordContainer).toBeTruthy();
  });

  it('should render password input', () => {
    const passwordInput = fixture.debugElement.query(
      By.css('[data-testid="password-input"]')
    );

    expect(passwordInput).toBeTruthy();
  });

  it('should render password label', () => {
    const passwordLabel = fixture.debugElement.query(
      By.css('[data-testid="password-label"]')
    );

    expect(passwordLabel).toBeTruthy();
  });

  it('should not render password errors', () => {
    const passwordErrorContainer = fixture.debugElement.query(
      By.css('[data-testid="password-error"]')
    );

    expect(passwordErrorContainer).toBeFalsy();
  });

  it('should render password errors', () => {
    const passwordFormControl = component.formRef.get('password');

    passwordFormControl?.setErrors({ required: true });

    fixture.detectChanges();

    const passwordErrorContainer = fixture.debugElement.query(
      By.css('[data-testid="password-errors"]')
    );

    expect(passwordErrorContainer).toBeTruthy();
  });
});
