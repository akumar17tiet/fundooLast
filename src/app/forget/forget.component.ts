import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ConnectService } from "../services/services.service";

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  // router: Router;
  isValid = false;

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
    this.email.hasError('email') ? 'Not a valid email' : ''
  }
  constructor(private userService: ConnectService, private router: Router) { }

  ngOnInit() {
  }
  sendMail() {
    var user = {
      "email" : this.email.value
    }
    let options = {
      data : user,
      purpose: 'user/reset'
    }
    console.log(options);
    this.userService.forgotServices(options.purpose, options.data).subscribe((response:any)=>{
      console.log(response);
      this.isValid = true;
      this.router.navigate(['/reset']);
    }, (error)=>{
      console.log(error);
    });
  }



}

