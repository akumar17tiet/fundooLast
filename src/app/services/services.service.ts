import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from "../../environments/environment";
import { BehaviorSubject } from "rxjs";

// import { Options } from 'selenium-webdriver/safari';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  response: any;
  error: any;

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  message: any;

  private booleanSource = new BehaviorSubject('');
  boolMessage = this.booleanSource.asObservable();
  bool: string;

  private objSource = new BehaviorSubject({});
  currentObj = this.objSource.asObservable();

  constructor(private http: HttpClient) { }

  print(msg)
  {
    console.log(msg);
  }

  // private messageSource = new BehaviorSubject('');
  // currentMessage = this.messageSource.asObservable();
  // message : string;
  link : string = environment.baseUrl;

  registerService(url:string, userObj){
   return this.http.post(this.link+url, userObj);
  }

  loginServices(url:string, userObj) {
    return this.http.post(this.link+url, userObj);
  }

  forgotServices(url:string,userObj){
    return this.http.post (this.link+url,userObj);
  }
  
  // cart services started
  getService(url: string) {
    return this.http.get(this.link+url)
  }

  addToCart(data){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.post(this.link+'productcarts/addToCart', data, httpOptions)
  }
  //cart services finished
  
  resetService(options) {
    console.log("Inside Reset Service...")
    console.log("options=+=+=" , options)
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('token')
      })
    }
    console.log("encoded data",this.getEncodedData(options.data) );
    return this.http.post(this.link+options.purpose, this.getEncodedData(options.data), httpOptions);
  }

  changeMessage(message){
    this.messageSource.next(message);
  }

  changeBool(bool) {
    this.booleanSource.next(bool);
  }

  changeObj(message) {
    this.objSource.next(message);
  }

  noteServices(options) {
    let httpOptions={
      headers : new HttpHeaders({
        'Content-type':'application/x-www-form-urlencoded',
        'Authorization':localStorage.getItem('token')
      })
    }
    return this.http.post(this.link+options.purpose, this.getEncodedData(options.data), httpOptions);
  }


  getEncodedData(data){
    const formBody=[];
    for(const property in data){
      const encodedKey= encodeURIComponent(property);
      const encodedValue= encodeURIComponent(data[property]);
      formBody.push(encodedKey+'='+encodedValue);
    }
    return formBody.join ('&');
  }

  getNoteServices(options){
    let httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/x-www-form-urlencoded',
        'Authorization':localStorage.getItem('token')
      })
    }  
    return this.http.get(this.link+options.purpose,httpOptions)
  }

  getNotes(options) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.get(this.link + options.purpose, httpOptions)
  }

  noteTrashService(options) {
    let httpOptions={
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':localStorage.getItem('token')
      })
    }
    return this.http.post(this.link+options.purpose, options.data, httpOptions);
  }

  getLabelService(options){
    let httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':localStorage.getItem('token')
      })
    }
    return this.http.get(this.link+options.purpose, httpOptions)
  }

  postWithTokenNotEncoded(options) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.post(this.link+options.purpose, options.data, httpOptions);
  }

  deleteWithToken(options) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.delete(this.link+options.purpose, httpOptions);
  }

  getWithToken(options) {
    let httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/x-www-form-urlencoded',
        'Authorization':localStorage.getItem('token')
      })
    }
    return this.http.get(this.link+options.purpose, httpOptions)
  }
  imageUserService(options){
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization':localStorage.getItem('token')
      })
    }
    return this.http.post(this.link + options.purpose, options.data,httpOptions);
  }
  
  getNoteByLabel(options){
    let httpOptions = {
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':localStorage.getItem('token')
      })
    }
    return this.http.post(this.link +options.purpose, options.data,httpOptions)
  }
  //
  searchUserList(data, options) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.post(this.link+options, data, httpOptions);
  }

  getPatch(options) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.patch(this.link+options.purpose, options.data, httpOptions)
  }

  deleteWithTokenJson(options) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.delete(this.link + options.purpose, httpOptions);
  }
  
//reminder business is taken care down here

  reminderdisplaynoteservice(options) {
    let httpOptions = {    
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.get(this.link + options.purpose, httpOptions)
  }

  remindernoteservice(Obj){
    let httpOptions = {    
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.post(this.link+Obj.purpose, Obj.data, httpOptions);
  }
  reminderDeleteService(options) {
    let httpOptions = {    
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.post(this.link+options.purpose, options.data, httpOptions);
  }
  
  /* */
  postQuestionAnswer(options) {
    let httpOptions = {    
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.post(this.link+options.purpose, options.data, httpOptions);
  }

  updateCheckList(options){
    let httpOptions = {    
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    console.log(options)
    return this.http.post(this.link+"notes/"+options.noteId+"/checklist/"+options.checklistId+"/update", options.checklistdata, httpOptions);
  }

  deleteCheckList(options){
    let httpOptions={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization' : localStorage.getItem('token')
      })
    }
    console.log(options)
    return this.http.post(this.link+"notes/"+options.noteId+"/checklist/"+options.checklistId+"/remove", options.checklistdata, httpOptions);
  }

  addList(options){
    let httpOptions={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization' : localStorage.getItem('token')
      })
    }
    console.log(options)
    return this.http.post(this.link+"notes/"+options.noteId+"/checklist/add", options.data, httpOptions);
  }
  

  getCartDetails(options) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.get(this.link + options.purpose, httpOptions)
  }


}


    
  
   
  
