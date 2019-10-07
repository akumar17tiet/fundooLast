import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  link : string = environment.baseUrl;
 
  constructor(private http: HttpClient) { 
    console.log(this.link)
  }
 
  print(msg){
    console.log(msg);}

    registerService(url:string,userObj){
      return this.http.post(this.link+url,userObj);
    }
    loginServices(url:string,userObj){
      return this.http.post(this.link+url,userObj);
    }
  }

    // // registration(userObj){
    // //  return this.http.post(' http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', userObj)
    // //     .subscribe((response) => {
    // //       this.response = response;
    // //       console.log(this.response);
    //     })
    // }

    // }

    
  
   
  
