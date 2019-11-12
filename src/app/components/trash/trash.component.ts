import { Component, OnInit } from '@angular/core';
import { ConnectService } from "../../services/services.service";
import { Note } from "../../model/notes.model";
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';


@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  records : any;
  note :Note;
  message:any;
  delRecords:any;
  loading: boolean = false;
  

  constructor(private noteService: ConnectService,private snackbar: SnackbarService) { }

  ngOnInit() {
    this.receiveNotes();
  }
  receiveNotes() {
    let options = {
      purpose: 'notes/getTrashNotesList'
    }
    this.loading = true
    return this.noteService.getNoteServices(options).subscribe((response: any) => {
      this.records = response.data.data.reverse().filter(function (Deleted) {
        return Deleted.isDeleted == true;
      });
      console.log(response);
      this.loading=false;
    }, (error) => {
      console.log(error);
    });

  }


  deleteForever(event, id: any) {

  if (event == "Deleting the note...") {
    // this.message = $event;
    console.log(id)
    let noteData = {
      "noteIdList": [id],
      "isDeleted": true
    }
    console.log(noteData);
    let options = {
      data: noteData,
      purpose: 'notes/deleteForeverNotes'
    }
    this.noteService.noteTrashService(options).subscribe((Object) => {
      this.snackbar.open("Note deleted forever successfully")
      this.receiveNotes();
    }, (error) => {
      console.log(error);
    });
  }
}


deleteAll() {
  let options = {
    purpose: 'notes/getTrashNotesList'
  }
  return this.noteService.getNoteServices(options).subscribe((response: any) => {
    this.delRecords = response.data.data.reverse().filter(function (Deleted) {
      return Deleted.isDeleted == true;
    });
    console.log("idsss ", this.delRecords[0].id);
    this.snackbar.open("All Notes deleted")
  }, (error) => {
    console.log(error);
  });
}

restore($event, id: any) {
  this.message = $event;
  if ($event == "Restoring the note...") {
    let noteData = {
      "noteIdList": [id],
      "isDeleted": false
    }
    console.log(noteData);
    let options = {
      data: noteData,
      purpose: 'notes/trashNotes'
    }
    this.noteService.noteTrashService(options).subscribe((Object) => {
      this.snackbar.open("Note restored successfully")
      this.receiveNotes();
    }, (error) => {
      console.log(error);
    });
  }
}}
