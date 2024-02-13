import { RegisterFormGroup } from './register.form';

describe('RegisterFormGroup', () => {
  it('should show initial errors', () => {
    const _form = new RegisterFormGroup();

    expect(_form.invalid).toBeTrue();
    expect(_form.get('username')?.invalid).toBeTrue();
    expect(_form.get('username')?.hasError('required')).toBeTrue();
    expect(_form.get('username')?.hasError('userFound')).toBeFalse();

    expect(_form.get('password')?.invalid).toBeTrue();
    expect(_form.get('password')?.hasError('required')).toBeTrue();

    expect(_form.get('confirmPassword')?.invalid).toBeTrue();
    expect(_form.get('confirmPassword')?.hasError('required')).toBeTrue();
    expect(_form.get('confirmPassword')?.hasError('match')).toBeFalse();
  });

  it('should have no errors on happy path', () => {
    const _form = new RegisterFormGroup();
    _form.patchValue({
      username: 'Pera',
      password: '123',
      confirmPassword: '123',
    });

    expect(_form.valid).toBeTrue();
    expect(_form.get('username')?.valid).toBeTrue();
    expect(_form.get('password')?.valid).toBeTrue();
    expect(_form.get('confirmPassword')?.valid).toBeTrue();
  });

  it('should have password match errors', () => {
    const _form = new RegisterFormGroup();
    _form.patchValue({
      username: 'Pera',
      password: '123',
      confirmPassword: '1234',
    });

    expect(_form.invalid).toBeTrue();
    expect(_form.get('confirmPassword')?.invalid).toBeTrue();
    expect(_form.get('confirmPassword')?.hasError('match')).toBeTrue();

    _form.patchValue({
      password: '1234',
    });

    expect(_form.valid).toBeTrue();
    expect(_form.get('confirmPassword')?.valid).toBeTrue();
    expect(_form.get('confirmPassword')?.hasError('match')).toBeFalse();
  });

  it('should have userFound error when user is not unique', () => {
    const _form = new RegisterFormGroup();
    _form.findUserCB = (username: string): boolean => {
      switch (username) {
        case 'Pera':
          return true;
        default:
          return false;
      }
    };

    _form.patchValue({
      username: 'Pera',
      password: '123',
      confirmPassword: '123',
    });

    expect(_form.invalid).toBeTrue();
    expect(_form.get('username')?.invalid).toBeTrue();
    expect(_form.get('username')?.hasError('userFound')).toBeTrue();
  });
  
  it('should not have userFound error when user is unique', () => {
    const _form = new RegisterFormGroup();
    _form.findUserCB = (username: string): boolean => {
      switch (username) {
        case 'Pera':
          return true;
        default:
          return false;
      }
    };

    _form.patchValue({
      username: 'Marko',
      password: '123',
      confirmPassword: '123',
    });

    expect(_form.valid).toBeTrue();
    expect(_form.get('username')?.valid).toBeTrue();
    expect(_form.get('username')?.hasError('userFound')).toBeFalse();
  })
});
