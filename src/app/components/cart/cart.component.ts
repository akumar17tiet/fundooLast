import { Component, OnInit } from '@angular/core';
import { ConnectService } from "../../services/services.service";
import { FormBuilder,FormGroup,Validators } from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  service=[];
  isLinear:boolean =true;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private noteService: ConnectService) { }

  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.getCartDetails();
  }

  getCartDetails() {
    let options = {
      purpose: "productcarts/myCart"
    }
    this.noteService.getCartDetails(options).subscribe((result)=> {
      this.service = result['data'];
      console.log(result['data']);
    }, (error)=> {
      console.log(error);
    })
  }
}
