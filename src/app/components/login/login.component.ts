import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ConnectService } from '../../../app/services/services.service';
import { User } from '../login/login.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required]);
  hide = true;
  userObj: User = new User();
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }
  geteRrorMessage(){
    return this.password.hasError('required')
  }



  constructor(private userService: ConnectService, private router: Router) { }
  ngOnInit() {
  }

  onLogin() {

    this.userObj = {
        email: this.email.value,
        password: this.password.value
    }
    console.log('kjshjkhsjhsjksjkhjks', this.userObj)
    let options = {
        data: this.userObj,
        purpose: 'user/login'
    }
  this.userService.loginServices(options.purpose , options.data).subscribe((data:any)=>{
      console.log(data);
      localStorage.setItem("token",data.id)
      localStorage.setItem('firstName',data.firstName)
      localStorage.setItem('lastName',data.lastName)
      localStorage.setItem('email',data.email)
      this.router.navigate(['dashboard'])
  })

}
}

