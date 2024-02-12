import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { RegisterFormGroup } from './register.form';
import { By } from '@angular/platform-browser';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    component.formRef = new RegisterFormGroup();
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
      By.css('.form-control-username')
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
      By.css('[data-testid="username-errors"]')
    );

    expect(usernameErrorContainer).toBeFalsy();
  });

  it('should render username errors', () => {
    const usernameFormControl = component.formRef.get('username');

    usernameFormControl?.setErrors({ required: true });

    fixture.detectChanges();

    const usernameErrorContainer = fixture.debugElement.query(
      By.css('[data-testid="username-errors"]')
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
      By.css('[data-testid="password-errors"]')
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

  /** Confirm password tests */

  it('should render confirm password form control container', () => {
    const confirmPasswordContainer = fixture.debugElement.query(
      By.css('[data-testid="confirm-password"]')
    );

    expect(confirmPasswordContainer).toBeTruthy();
  });

  it('should render confirm password input', () => {
    const confirmPasswordInput = fixture.debugElement.query(
      By.css('[data-testid="confirm-password-input"]')
    );

    expect(confirmPasswordInput).toBeTruthy();
  });

  it('should render confirm password label', () => {
    const confirmPasswordLabel = fixture.debugElement.query(
      By.css('[data-testid="confirm-password-label"]')
    );

    expect(confirmPasswordLabel).toBeTruthy();
  });

  it('should not render confirm password errors', () => {
    const confirmPasswordErrorContainer = fixture.debugElement.query(
      By.css('[data-testid="confirm-password-errors"]')
    );

    expect(confirmPasswordErrorContainer).toBeFalsy();
  });

  it('should render confirm password errors', () => {
    const confirmPasswordFormControl =
      component.formRef.get('confirm-password');

    confirmPasswordFormControl?.setErrors({ required: true });

    fixture.detectChanges();

    const confirmPasswordErrorContainer = fixture.debugElement.query(
      By.css('[data-testid="confirm-password-errors"]')
    );

    expect(confirmPasswordErrorContainer).toBeTruthy();
  });
});
