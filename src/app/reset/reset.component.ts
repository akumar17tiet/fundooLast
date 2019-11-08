import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ConnectService } from '../../app/services/services.service';
import { Reset } from '../model/reset.model';
import { Router , ActivatedRoute} from "@angular/router";
import { throwToolbarMixedModesError } from '@angular/material';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  userObj: Reset = new Reset();
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirmPassword = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.password.value)]);
  // password = new FormControl('',[Validators.required]);
  hide = true;

  getErrorPassword() {
    return this.password.hasError('required') ? 'You must enter a value' :
    this.password.hasError('minlength') ? 'Minimum length should be 8 characters' : ''
  }

  constructor(private userService: ConnectService, private router: Router, private activated: ActivatedRoute) { }
  
  accessToken = this.activated.snapshot.paramMap.get('token');
  
  ngOnInit() {
    localStorage.setItem('token', this.accessToken);
  }
  PasswordInvalidMessage() {
    if (this.password.hasError("required")) {
      return "Password is required"
    }
    if (this.password.hasError("minlength")) {
      return "Password must be 8 characters"
    }

  }

  ConfirmPasswordInvalidMessage() {
    if (this.confirmPassword.hasError("required")) {
      return "Password is required"
    }
    if (this.confirmPassword.hasError("minlength")) {
      return "Password must be 8 characters"
    }
    if (this.confirmPassword.hasError("pattern")) {
      return "Password did not match"
    }
  }
  OnReset(){
    var userObj1 = {
      newPassword : this.password.value
    }
    let options = {
      data : userObj1,
      purpose: 'user/reset-password'
    }
    console.log("resetComponent")
    this.userService.resetService(options).subscribe((data:any)=> {
      console.log(data);
      localStorage.clear();
      this.router.navigate(['/login']);
    }, (error)=>{
      console.log("This is error");
      console.log(error);
    });
  }
  }


