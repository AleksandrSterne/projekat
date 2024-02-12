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

  describe('Initial state', () => {
    it('should render form group container', () => {
      const formGroupContainer = fixture.debugElement.query(
        By.css('.__form-group')
      );

      expect(formGroupContainer).toBeTruthy();
    });

    it('should render username form control elements initial state', () => {
      const usernameContainer = fixture.debugElement.query(
        By.css('.__username-fc-container')
      );
      const usernameFormControl = fixture.debugElement.query(
        By.css('.__username-fc')
      );
      const usernameInput = fixture.debugElement.query(
        By.css('.__username-input')
      );
      const usernameLabel = fixture.debugElement.query(
        By.css('.__username-label')
      );
      const usernameErrors = fixture.debugElement.query(
        By.css('__username-errors')
      );
      const usernameErrorMessage = fixture.debugElement.query(
        By.css('__username-error-message')
      );

      expect(usernameContainer).toBeTruthy();
      expect(usernameFormControl).toBeTruthy();
      expect(usernameInput).toBeTruthy();
      expect(usernameLabel).toBeTruthy();
      expect(usernameErrors).toBeFalsy();
      expect(usernameErrorMessage).toBeFalsy();
    });

    it('should render password form control elements initial state', () => {
      const passwordContainer = fixture.debugElement.query(
        By.css('.__password-fc-container')
      );
      const passwordFormControl = fixture.debugElement.query(
        By.css('.__password-fc')
      );
      const passwordInput = fixture.debugElement.query(
        By.css('.__password-input')
      );
      const passwordLabel = fixture.debugElement.query(
        By.css('.__password-label')
      );
      const passwordErrors = fixture.debugElement.query(
        By.css('__password-errors')
      );
      const passwordErrorMessage = fixture.debugElement.query(
        By.css('__password-error-message')
      );

      expect(passwordContainer).toBeTruthy();
      expect(passwordFormControl).toBeTruthy();
      expect(passwordInput).toBeTruthy();
      expect(passwordLabel).toBeTruthy();
      expect(passwordErrors).toBeFalsy();
      expect(passwordErrorMessage).toBeFalsy();
    });

    it('should render confirm password form control elements initial state', () => {
      const confirmPasswordContainer = fixture.debugElement.query(
        By.css('.__confirm-password-fc-container')
      );
      const confirmPasswordFormControl = fixture.debugElement.query(
        By.css('.__confirm-password-fc')
      );
      const confirmPasswordInput = fixture.debugElement.query(
        By.css('.__confirm-password-input')
      );
      const confirmPasswordLabel = fixture.debugElement.query(
        By.css('.__confirm-password-label')
      );
      const confirmPasswordErrors = fixture.debugElement.query(
        By.css('__confirm-password-errors')
      );
      const confirmPasswordErrorMessage = fixture.debugElement.query(
        By.css('__confirm-password-error-message')
      );

      expect(confirmPasswordContainer).toBeTruthy();
      expect(confirmPasswordFormControl).toBeTruthy();
      expect(confirmPasswordInput).toBeTruthy();
      expect(confirmPasswordLabel).toBeTruthy();
      expect(confirmPasswordErrors).toBeFalsy();
      expect(confirmPasswordErrorMessage).toBeFalsy();
    });
  });

  describe('Error state', () => {
    it('should render required errors', () => {
      component.formRef.markAllAsTouched();

      component.formRef.setErrors({
        username: { required: true },
        password: { required: true },
        confirmPassword: { required: true },
      });

      component.formRef.cdr?.detectChanges();

      const usernameErrors = fixture.debugElement.query(
        By.css('.__username-errors')
      );
      const usernameErrorMessage = fixture.debugElement.query(
        By.css('.__username-error-required')
      );
      const passwordErrors = fixture.debugElement.query(
        By.css('.__password-errors')
      );
      const passwordErrorMessage = fixture.debugElement.query(
        By.css('.__password-error-required')
      );
      const confirmPasswordErrors = fixture.debugElement.query(
        By.css('.__confirm-password-errors')
      );
      const confirmPasswordErrorMessage = fixture.debugElement.query(
        By.css('.__confirm-password-error-required')
      );

      expect(usernameErrors).toBeTruthy();
      expect(usernameErrorMessage).toBeTruthy();
      expect(usernameErrorMessage.nativeElement.textContent).toContain(
        'This field is required'
      );
      expect(passwordErrors).toBeTruthy();
      expect(passwordErrorMessage).toBeTruthy();
      expect(passwordErrorMessage.nativeElement.textContent).toContain(
        'This field is required'
      );
      expect(confirmPasswordErrors).toBeTruthy();
      expect(confirmPasswordErrorMessage).toBeTruthy();
      expect(confirmPasswordErrorMessage.nativeElement.textContent).toContain(
        'This field is required'
      );
    });

    it('should render userFound username error', () => {
      component.formRef.markAllAsTouched();

      component.formRef.get('username')?.setErrors({ userFound: true });

      component.formRef.cdr?.detectChanges();

      const usernameErrors = fixture.debugElement.query(
        By.css('.__username-errors')
      );
      const usernameErrorMessage = fixture.debugElement.query(
        By.css('.__username-error-user-found')
      );

      expect(usernameErrors).toBeTruthy();
      expect(usernameErrorMessage).toBeTruthy();
      expect(usernameErrorMessage.nativeElement.textContent).toContain(
        'Username already exists'
      );
    });

    it('should render match password error', () => {
      component.formRef.markAllAsTouched();

      component.formRef.get('confirmPassword')?.setErrors({ match: true });

      component.formRef.cdr?.detectChanges();

      const confirmPasswordErrors = fixture.debugElement.query(
        By.css('.__confirm-password-errors')
      );
      const confirmPasswordErrorMessage = fixture.debugElement.query(
        By.css('.__confirm-password-error-match')
      );

      expect(confirmPasswordErrors).toBeTruthy();
      expect(confirmPasswordErrorMessage).toBeTruthy();
      expect(confirmPasswordErrorMessage.nativeElement.textContent).toContain(
        'Passwords do not match'
      );
    });
  });
});
