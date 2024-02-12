import { LoginFormGroup } from './login.form';

describe('LoginFormGroup', () => {
  it('should show initial errors', () => {
    const _form = new LoginFormGroup();

    expect(_form.invalid).toBeTrue();
    expect(_form.get('username')?.invalid).toBeTrue();
    expect(_form.get('username')?.hasError('required')).toBeTrue();

    expect(_form.get('password')?.invalid).toBeTrue();
    expect(_form.get('password')?.hasError('required')).toBeTrue();
  });

  it('should have no errors on happy path', () => {
    const _form = new LoginFormGroup();
    _form.patchValue({
      username: 'Pera',
      password: '123',
    });

    expect(_form.valid).toBeTrue();
    expect(_form.get('username')?.valid).toBeTrue();
    expect(_form.get('password')?.valid).toBeTrue();
  });

  it('should have errors after user input', () => {
    const _form = new LoginFormGroup();

    _form.patchValue({
      username: 'Pera',
      password: '123',
    });

    _form.patchValue({
      username: '',
      password: '',
    });

    expect(_form.invalid).toBeTrue();
    expect(_form.get('username')?.invalid).toBeTrue();
    expect(_form.get('password')?.invalid).toBeTrue();
  });
});
