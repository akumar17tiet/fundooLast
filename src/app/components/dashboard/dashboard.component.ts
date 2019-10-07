import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {DialogboxComponent} from "../dialogbox/dialogbox.component";

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
  label:string;

  // availableColors: ChipColor[] = [
  //   {name: 'none', color: undefined},
  //   {name: 'Primary', color: 'primary'},
  //   {name: 'Accent', color: 'accent'},
  //   {name: 'Warn', color: 'warn'}];

  constructor(private router:Router, public dialog:MatDialog) { }

  ngOnInit() {
  }
  
  gotoDashboard(){
    this.router.navigate(['dashboard'])
  }
  openDialog():void{
    const dialogRef =this.dialog.open(DialogboxComponent,{
      width:'250px',
      data:{label:this.label}
    });
    dialogRef.afterClosed().subscribe(result =>{
      console.log('THe dialog was closed');
      this.label = result;
    });
  }

}
