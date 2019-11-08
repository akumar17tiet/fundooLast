import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {DisplayNotesComponent} from '../display-notes/display-notes.component';
// import { FormControl } from '@angular/forms';
// import {Note} from "../../model/notes.model";
import { ConnectService } from "../../services/services.service";

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  color:any;
  options:any;
  constructor(private noteService:ConnectService,public dialogRef:MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

    ngOnInit() {
      this.color = this.data.color
    }
  
    colorChange($event) {
      this.color = $event;
    }
  
    close() {
  
      let noteModel = {
        noteId: this.data.noteIdList,
        title: this.data.title,
        description: this.data.description,
        color: this.color
      }
      console.log("note<", noteModel)
      console.log("noteModel wala data ", noteModel);
      this.options = {
        data: noteModel,
        purpose: 'notes/updateNotes'
      }
      this.noteService.noteServices(this.options).subscribe((Object) => {
        console.log(Object);
        this.noteService.changeMessage('note saved');
      }, (error) => {
        console.log(error);
      });
  
      this.dialogRef.close();
    }
  
  }