import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormGroup } from './register.form';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  @Input() formRef!: RegisterFormGroup;

  constructor(public cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.formRef) {
      this.formRef.cdr = this.cdr;
    }
  }
}
