import { Component, OnInit } from '@angular/core';
import { ConnectService } from "../../services/services.service";
import { Note } from "../../model/notes.model";
import { EditDialogComponent } from "../edit-dialog/edit-dialog.component";
import { MatDialog } from '@angular/material';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  records:any;
  note:Note;
  message:any;
  dialogRef: any;
  label: any;
  
  constructor(private noteService: ConnectService, public dialog: MatDialog, private snackbar: SnackbarService) { }

  ngOnInit() {
    this.receiveNotes();
  }

  receiveNotes() {
    let options = {
      purpose: 'notes/getArchiveNotesList'
    }
    return this.noteService.getNoteServices(options).subscribe((response: any) => {
      this.records = response.data.data.reverse().filter(function (archived) {
        return (archived.isArchived == true && archived.isDeleted == false);
      });
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  deleteNote($event, id:any) {
    if ($event == "Deleting note...") {
      let noteData = {
        "noteIdList": [id],
        "isDeleted": true
      }
      console.log(noteData);
      let options = {
        data: noteData,
        purpose: 'notes/trashNotes'
      }
      this.noteService.noteTrashService(options).subscribe((Object) => {
        this.snackbar.open("Note deleted successfully")
        this.receiveNotes();
      }, (error) => {
        this.snackbar.open("error deleting note")
      });
    }
  }

  changeColor($event, id: any) {
    let noteData = {
      "noteIdList": [id],
      "color": $event
    }
    console.log(noteData);
      let options = {
        data: noteData,
        purpose: 'notes/changesColorNotes'
      }
      this.noteService.noteTrashService(options).subscribe((Object) => {
        this.snackbar.open("color changed successfully")
        this.receiveNotes();
      }, (error) => {
        this.snackbar.open("color change error")
      });
  }
  editDialog(title, description, color, id) {
    this.dialogRef = this.dialog.open(EditDialogComponent, {
      width: '450px',
      data: {
        noteIdList: id,
        title: title,
        description: description,
        color: color
      },
      panelClass: 'custom-modalbox'
    });
    this.dialogRef.afterClosed().subscribe(result => {
      this.receiveNotes();
    });
  }
  saveLabel($event, id) {
    this.label = $event;
    let noteData = {
      "noteId": id,
      "labelId": this.label
    };
    console.log(noteData);
    let options = {
      data: noteData,
      purpose: 'notes/' + id + '/addLabelToNotes/' + this.label + '/add'
    };
    this.noteService.noteTrashService(options).subscribe((Object) => {
      this.snackbar.open("Label saved successfully")
      this.receiveNotes();
    }, (error) => {
      console.log(error);
    });
  }

  removeLabel(labelId, noteId) {
    let noteData = {
      "noteId": noteId,
      "labelId": labelId
    };
    console.log(noteData);
    let options = {
      data: noteData,
      purpose: 'notes/' + noteId + '/addLabelToNotes/' + labelId + '/remove'
    };
    this.noteService.noteTrashService(options).subscribe((Object) => {
      this.snackbar.open("Label removed successfully")
      this.receiveNotes();
    }, (error) => {
      console.log(error);
    });
  }

}
