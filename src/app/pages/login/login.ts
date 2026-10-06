import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cards } from '../../components/cards/cards';
import { Alert } from '../../components/alert/alert';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, Cards,Alert, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm:FormGroup;
  authService:AuthService;
  constructor(private fb:FormBuilder, private auth:AuthService, private router:Router){
    this.authService = auth
    this.loginForm = this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.minLength(5),Validators.maxLength(20)]],
      rememberMe:[false]
    });
  }
  getEmail(){
    return this.loginForm.get('email');
  }

  getPassword(){
    return this.loginForm.get('password');
  }

  handleLoginFormSubmit(){
    console.log("login Form data", this.loginForm.value);
    this.authService.login();
    this.router.navigate(['/feed'])
    this.loginForm.reset()
  }
}
