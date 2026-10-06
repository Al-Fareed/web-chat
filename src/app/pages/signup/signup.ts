import { Component } from '@angular/core';
import { Alert } from '../../components/alert/alert';
import { Cards } from '../../components/cards/cards';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [Alert,Cards,FormsModule,ReactiveFormsModule,RouterLink,CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  signUpForm:FormGroup;
  constructor(private fb:FormBuilder){
    this.signUpForm = this.fb.group({
      usermail:['',[Validators.required,Validators.email]],
      password:['',[Validators.minLength(5), Validators.required]],
      confirmPassword:['',[Validators.minLength(5), Validators.required]]
    })
  }
  handlesignUpFormSubmit(){
  console.log("You signed up buddy");

  }
}
