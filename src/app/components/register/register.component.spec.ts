import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { RegisterFormGroup } from './register.form';
import { By } from '@angular/platform-browser';

const _expectFormFieldElements = (
  fixture: ComponentFixture<RegisterComponent>,
  selector: string,
  checkErrors: boolean = false,
  errorCount: number = 0
) => {
  fixture.detectChanges();

  let errors = fixture.debugElement.queryAll(By.css(`${selector} .errors div`));

  if (!checkErrors) {
    let input = fixture.debugElement.queryAll(By.css(`${selector} input`));
    let label = fixture.debugElement.queryAll(By.css(`${selector} label`));
    expect(label.length).toBe(1);
    expect(input.length).toBe(1);
    expect(errors.length).toBe(0);
  } else {
    expect(errors.length).toBe(errorCount);
  }
};

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
    it('should render username form field elements initial state', () => {
      _expectFormFieldElements(fixture, '.__username-fc', false, 0);
    });

    it('should render password form field elements initial state', () => {
      _expectFormFieldElements(fixture, '.__password-fc', false, 0);
    });

    it('should render confirm password form field elements initial state', () => {
      _expectFormFieldElements(fixture, '.__confirm-password-fc', false, 0);
    });
  });

  describe('Error state', () => {
    it('should render correct error state', () => {
      component.formRef.markAllAsTouched();

      component.formRef.cdr = component.cdr;

      component.formRef.usernameCtrl.setErrors({
        required: true,
        userFound: true,
      });
      component.formRef.passwordCtrl.setErrors({ required: true });
      component.formRef.confirmPasswordCtrl.setErrors({
        required: true,
        match: true,
      });

      component.formRef.cdr.detectChanges();

      _expectFormFieldElements(fixture, '.__username-fc', true, 2);
      _expectFormFieldElements(fixture, '.__password-fc', true, 1);
      _expectFormFieldElements(fixture, '.__confirm-password-fc', true, 2);

      expect(
        fixture.debugElement.queryAll(By.css('.__username-fc .errors div'))[0]
          .nativeElement.textContent
      ).toContain('This field is required');
      expect(
        fixture.debugElement.queryAll(By.css('.__username-fc .errors div'))[1]
          .nativeElement.textContent
      ).toContain('Username already exists');
      expect(
        fixture.debugElement.queryAll(By.css('.__password-fc .errors div'))[0]
          .nativeElement.textContent
      ).toContain('This field is required');
      expect(
        fixture.debugElement.queryAll(
          By.css('.__confirm-password-fc .errors div')
        )[0].nativeElement.textContent
      ).toContain('This field is required');
      expect(
        fixture.debugElement.queryAll(
          By.css('.__confirm-password-fc .errors div')
        )[1].nativeElement.textContent
      ).toContain('Passwords do not match');
    });
  });
});
