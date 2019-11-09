import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ConnectService } from '../../../app/services/services.service';
import { User } from '../register/register.model';
import { Router } from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
    userObj: User = new User();
    firstName = new FormControl('', [Validators.required]);
    lastName = new FormControl('', [Validators.required]);
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required]);
    // name = new FormControl('',[Validators.required]);
    hide = true;
    true = true;
    serv = []; //new Addition

    FirstNameInvalidMessage() {
        if (this.firstName.hasError("required"))
            return "First Name is required"
    }

    LastNameInvalidMessage() {
        if (this.lastName.hasError("required"))
            return "Last Name is required"
    }
    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' : '';
    }
    // geterrorMessage() {
    //   return this.name.hasError('required') ? 'Enter first name' :
    //   this.name.hasError('name') ? 'Not a valid name' : '';
    // }
    getErrorPassword() {
        return this.password.hasError('required') ? 'You must enter a value' :
            this.password.hasError('minlength') ? 'Minimum length should be 8 characters' : ''
    }

    constructor(private userService: ConnectService, private router: Router) {
        this.userService.print("inside register CONSTRUCTOR"); //inside constructor --> private svc: ConnectService
    }
    ngOnInit() {
        this.getCartDetails();
        if(!localStorage.getItem('cartId'))
        {
          this.router.navigate(['/product'])
        }
      }
      //cart job
      getCartDetails() {
        let cartId = localStorage.getItem('cartId');
        let url = 'productcarts/getCartDetails/' + cartId
        this.userService.getService(url).subscribe((result) => {
          this.serv = result['data']['product'];
        }, (error) => {
          console.log(error);
        });
      }
    
      gotoProduct() {
        this.router.navigate(['/product']);
      }
      //cart job done
      OnRegister() {
        this.userObj = {
            
          firstName : this.firstName.value,
          lastName : this.lastName.value,
          email : this.email.value,
          password : this.password.value,
          service : this.serv['name'],
          cartId: localStorage.getItem('cartId')
        }
        let options = {
          data : this.userObj,
          purpose: 'user/userSignUp'
        }
        this.userService.registerService(options.purpose , options.data).subscribe((data:any)=> {
          if(data != undefined){
            console.log(data.data);
            if(data.data.success){
              console.log("Registration status "+ data.data.success);
              this.router.navigate(['login']);
            }
          }
        })
      }
}
