import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormGroup } from './login.form';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  @Input() formRef!: LoginFormGroup;

  constructor(public cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.formRef) {
      this.formRef.cdr = this.cdr;
    }
  }
}
