import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginForm = this.loginService.initializeLoginForm();
  }

  submitLogin() {
    if (!this.loginService.approveLogin(this.loginForm.value)) {
      alert('Wrong credentials.');     
      
      return
    }

    alert('Sucessfull login!')
  }
}
