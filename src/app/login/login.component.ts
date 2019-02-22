import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoService } from '../userinfo.service';
import { validationMsg } from './login.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
validatinMsg = validationMsg;
errMsg = {};
  constructor(private fb:FormBuilder,private router:Router,private userInfoService:UserInfoService) { }

  ngOnInit() {
    this.createLoginForm();
    this.loginForm.valueChanges.subscribe(()=>{
       this.isFormValid();
    })
  }
 createLoginForm(){
   this.loginForm = this.fb.group({
     firstName:['',Validators.required],
     lastName:['',Validators.required],
     email:['',[Validators.required,Validators.email]],
     password:['',[Validators.required,Validators.minLength(3)]]
   })
 }

 login(){
   if(this.loginForm.valid){
      this.userInfoService.setUserInfo(this.loginForm.value);
      this.router.navigate(['/result']);
   }else{
     this.isFormValid();
   }
 }

 isFormValid(){
   this.errMsg = {};
   Object.keys(this.loginForm.controls).forEach(key =>{
     let control = this.loginForm.controls[key];
     control.markAsTouched({onlySelf:true});
   })
   for(let control in this.loginForm.value){
      let formControl = this.loginForm.get(control);
      for(let err in formControl.errors){
        if(formControl.errors && formControl.touched){
          this.errMsg[control] = this.validatinMsg[control][err];
        }
         }
   }
 }
}
