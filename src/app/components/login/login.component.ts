import { Component, Input } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../../models/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Input() loginForm!: FormGroup;

  currentUser$: Observable<User | null> = this.loginService.currentUser$;

  constructor(private loginService: LoginService) {}

  submitLogin() {
    if (!this.loginService.approveLogin(this.loginForm.value)) {
      alert('Wrong credentials.');     
      
      return
    }

    alert('Sucessfull login!')
  }
}
