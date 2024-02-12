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
  });

  describe('Error state', () => {
    it('should render required errors', () => {
      component.formRef.markAllAsTouched();

      component.formRef.setErrors({
        username: { required: true },
        password: { required: true },
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

      expect(usernameErrors).toBeTruthy();
      expect(usernameErrorMessage).toBeTruthy();
      expect(usernameErrorMessage.nativeElement.textContent).toContain(
        'This field is required'
      );
      expect(passwordErrors).toBeTruthy();
      expect(passwordErrorMessage).toBeTruthy();
      expect(usernameErrorMessage.nativeElement.textContent).toContain(
        'This field is required'
      );
    });
  });
});
