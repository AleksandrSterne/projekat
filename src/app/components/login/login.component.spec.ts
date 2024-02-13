import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { LoginFormGroup } from './login.form';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

const _expectFormFieldElements = (
  fixture: ComponentFixture<LoginComponent>,
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
    it('should render username form field elements initial state', () => {
      _expectFormFieldElements(fixture, '.__username-fc', false, 0);
    });

    it('should render password form field elements initial state', () => {
      _expectFormFieldElements(fixture, '.__password-fc', false, 0);
    });
  });

  describe('Error state', () => {
    it('should render correct error state', () => {
      component.formRef.markAllAsTouched();

      component.formRef.cdr = component.cdr;

      component.formRef.setErrors({
        username: { required: true },
        password: { required: true },
      });

      component.formRef.cdr.detectChanges();

      _expectFormFieldElements(fixture, '.__username-fc', true, 1);
      _expectFormFieldElements(fixture, '.__password-fc', true, 1);

      expect(
        fixture.debugElement.queryAll(By.css('.__username-fc .errors div'))[0]
          .nativeElement.textContent
      ).toContain('This field is required');
      expect(
        fixture.debugElement.queryAll(By.css('.__password-fc .errors div'))[0]
          .nativeElement.textContent
      ).toContain('This field is required');
    });
  });
});
