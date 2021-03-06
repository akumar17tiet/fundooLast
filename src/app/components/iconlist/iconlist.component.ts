import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { ConnectService } from "../../services/services.service";
import { FormControl } from '@angular/forms';
import { MatDialog } from "@angular/material";

export interface Tile {
  color: string;
}

@Component({
  selector: 'app-iconlist',
  templateUrl: './iconlist.component.html',
  styleUrls: ['./iconlist.component.scss']
})

export class IconlistComponent implements OnInit {
  listToggle = false
  colorArray =
  [[
    { 'color': '#F48FB1', 'name': 'pink' },
    { 'color': '#FFAB40', 'name': 'brown' },
    { 'color': '#B39DDB', 'name': 'purple' },
    { 'color': '#E0E0E0', 'name': 'gray' }
  ],
  [
    { 'color': '#FFEB3B', 'name': 'Yellow' },
    { 'color': '#FFFFFF', 'name': 'White' },
    { 'color': '#E53935', 'name': 'Red' },
    { 'color': '#EF6C00', 'name': 'Orange' }
    ],
  [
    { 'color': '#0288D1', 'name': 'darkblue' },
    { 'color': '#69F0AE', 'name': 'teal' },
    { 'color': '#B2FF59', 'name': 'green' },
    { 'color': '#81D4FA', 'name': 'blue' }
    
  ]]
  labels: any;
  label: any;
  labelId: any;
  dailogRef:any;
  show: any = true;
  date = new FormControl(new Date());

messageCollab: string="Collab..."
messageDelete: string ="Deleting note..."
messageArchive: string = "Archive..."
messageQnA: string = "Question..."

@Output() messageEvent = new EventEmitter<string>();
@Output() labelEvent = new EventEmitter<string>();
@Output() collabEvent = new EventEmitter<string>();
@Output() remindEvent = new EventEmitter<string>();
@Output() questionEvent = new EventEmitter<string>();
@Output() listEvent = new EventEmitter<boolean>();

constructor(private noteLabelService: ConnectService, public dialog: MatDialog) { }

ngOnInit() {
  this.getLabels();
}

changeColor(color :any) {
  this.messageEvent.emit(color);
}

deleteNote() {
  this.messageEvent.emit(this.messageDelete);
}

archiveNote() {
  this.messageEvent.emit(this.messageArchive);
}

gotoQnA() {
  this.questionEvent.emit(this.messageQnA);
}

labelNote(label:any) {
  this.label = label;
  this.labelEvent.emit(this.label);
  console.log("LabelID.. ", label)
}

getLabels() {

  const options = {
    purpose: 'noteLabels/getNoteLabelList',
  };
  this.noteLabelService.getWithToken(options).subscribe((response: any) => {
    this.labels = response.data.details;
    this.labelId = response.data.details;
  }, (error) => {
    console.log(error.statusText);
  });
}
openCollabDialog(){
  this.collabEvent.emit(this.messageCollab);
}

save(picker3) {
  this.remindEvent.emit(picker3);
}
  changeListToggle(){
    this.listToggle = !this.listToggle;
    this.listEvent.emit(this.listToggle);
  }
}


