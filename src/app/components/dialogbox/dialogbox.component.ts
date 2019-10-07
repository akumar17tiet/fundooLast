import { Component, OnInit } from '@angular/core';
// import {NoteInterface} from '../../interfaces/note';
// import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
// import {DisplaycardsComponent} from '../displaycards/displaycards.component'
// import { FormControl } from '@angular/forms';
// import {NotesService} from '../../services/notes.services/notes.service'

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']
})
export class DialogboxComponent implements OnInit {
  // note:NoteInterface;
  // title=new FormControl();
  // data=new FormControl();
  // options:any;

  constructor() { } 
  // private dialogRef: MatDialogRef<DisplaycardsComponent>,
  // @Inject(MAT_DIALOG_DATA) data,private notesService:NotesService) {
  //   this.note={description: data.description,
  //     title:data.title

  
  ngOnInit() {
  }
  // save() {
  //   this.note={
  //     title:this.title.value,
  //     description:this.data.value
  //   }
  //   this.dialogRef.close(this.note);
  //   this.options={
  //     data:this.note,
  //     purpose:'addNotes'
  //   }
  //   this.notesService.postWithToken(this.options).subscribe((response)=>{
  //     console.log(response);
  //   },(error)=>{
  //     console.log(error);
  //   });
  // }  
}
