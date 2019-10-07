import { Component, OnInit } from '@angular/core';
import { FormControl,Validators} from '@angular/forms';
import { Note } from "../../model/notes.model";
import { NotesServicesService } from "../../services/notes.services.service";

// import { ConnectService } from '../../services/services.service';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {

  show: boolean = false;
  hide: boolean = true;
  isActive: any = true;

  message : string;
  
  title = new FormControl();
  note = new FormControl();
  noteModel: Note;
  options: any;
  // constructor(private svc: ConnectService)) { }
  // message:string ;

  ngOnInit() {}

    Toggle() {
      this.show = !this.show;
      this.hide = !this.hide;
    }
  
    close() {
      this.show = !this.show;
      this.hide = !this.hide;
      this.noteModel = {
        title: this.title.value,
        notes: this.note.value
      }
    // this.svc.currentMessage.subscribe(message => this.message = message)
  }

}
