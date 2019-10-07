import { Component, OnInit } from '@angular/core';
import { NotesServicesService } from "../../services/notes.services.service";
import {MatDialog, MatDialogConfig} from "@angular/material";
import { Note } from "../../model/notes.model";

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  records: any;
  note: Note;

  constructor() { }

  ngOnInit() {
  }

}
