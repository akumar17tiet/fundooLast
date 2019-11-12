import { Component, OnInit,Injectable } from '@angular/core';
import{Router} from '@angular/router';
import{MatDialog} from '@angular/material';
import {DialogboxComponent} from "../dialogbox/dialogbox.component";
import { ImageDialogComponent } from "../image-dialog/image-dialog.component";
import { ConnectService } from "../../services/services.service";

export interface DialogData{
  label:string;
}
// import {ThemePalette} from '@angular/material/core';
// export interface ChipColor {
//   name: string;
//   color: ThemePalette;
// }

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  labels:string;
  value: any;
  email=localStorage.getItem('email');
  searchText: string;
  firstName = localStorage.getItem('firstName');
  lastName = localStorage.getItem('lastName');
  backUrl: any;
  url: any;
  listView : boolean = false;

  // availableColors: ChipColor[] = [
  //   {name: 'none', color: undefined},
  //   {name: 'Primary', color: 'primary'},
  //   {name: 'Accent', color: 'accent'},
  //   {name: 'Warn', color: 'warn'}];

  constructor(private router:Router, public dialog: MatDialog, private noteLabelService: ConnectService ) { }

  ngOnInit() {
    this.getLabels();
    // this.router.navigate(['']);
    this.noteLabelService.currentMessage.subscribe((res)=>{
      this.changeimage();
    })
  }
  
  gotoDashboard(){
    this.router.navigate([''])
  }
  gotoNotes() {
    this.router.navigate(['notes'])
  }
  gotoReminder(){
    this.router.navigate(['reminder'])
  }
  gotoArchive(){
    this.router.navigate(['archive'])
  }
  gotoTrash(){
    this.router.navigate(['trash'])
  }
  exitApp(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
  gotoCart() {
    this.router.navigate(['shoppingCart']);
  }
  

  getLabels() {
    const options = {
      purpose: 'noteLabels/getNoteLabelList',
    };
    this.noteLabelService.getWithToken(options).subscribe((response: any) => {
      this.labels = response.data.details.reverse();
      console.log(response.data.details);
    }, (error) => {
      console.log(error.statusText);
    });
  }

  searchfor() {
    if (this.searchText == '') {
      this.noteLabelService.changeMessage("no searching");
    }
    else
      this.noteLabelService.changeMessage(this.searchText);
  }
 

  openDialog() {
    const dialogRef = this.dialog.open(DialogboxComponent);

    dialogRef.afterClosed().subscribe(
      (result) => {
        console.log('Dialog output:', result);
        this.getLabels();
      }
    );
  }  

  openImageDialog() {
    const imgDialogRef = this.dialog.open(ImageDialogComponent, {width: '750px',height: '550px'});

    imgDialogRef.afterClosed().subscribe((res)=>{
      console.log('Image saved', res);
    })
  }

  changeimage(){
    this.backUrl = localStorage.getItem('imageUrl');  
    this.url = 'http://fundoonotes.incubation.bridgelabz.com/' + this.backUrl;
  }
  
  gotoLabel(label){
    this.router.navigate(['label/'+label])
    this.noteLabelService.changeMessage(label);
  }
  changeView()
  {
    this.listView=!this.listView;
    this.noteLabelService.changeBool(this.listView);
  }

  // changeView(){
  //   this.listView = !this.listView;
  //   this.noteLabelService.changeBool(this.listView);
  // }


  }


