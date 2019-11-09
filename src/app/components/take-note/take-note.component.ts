import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Note } from "../../model/notes.model";
import { ConnectService } from '../../services/services.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { MatDialog } from '@angular/material';
import { CollaboratorComponent } from "../collaborator/collaborator.component";
import { Router } from "@angular/router";;

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {

  show: boolean = false;
  hide: boolean = true;
  isActive: boolean = true;

  listToggle 
  listItem
  message : string;
  options: any;
  color:any="#ffffff";
  title =''
  note =''
  noteModel: Note = new Note();
  remind: any ='';
  checklist=[]

  collab: any = [];
  dialogRef: any;

  constructor(private noteService: ConnectService ,
     private snackbar: SnackbarService,  
     public dialog: MatDialog, private router: Router) { }
  

  ngOnInit() {}

    Toggle() {
      this.show = !this.show;
      this.hide = !this.hide;
    }
    colorChange($event){
      this.color=$event;
    }
    saveReminder($event) {
      this.remind = $event._validSelected
    }
  
    close() {
      if(this.title ==''&& this.note ==''){
        this.show = !this.show;
        this.hide = !this.hide;
        this.color = "#ffffff";
        return;
      }

      this.noteModel = {
        title: this.title,
        description: this.note,
        color: this.color,
        reminder:this.remind,
        checklist:JSON.stringify(this.checklist) //checklist has been stringified to pass
      }
      console.log(this.noteModel);
      this.options={
        data: this.noteModel,
        purpose: 'notes/addNotes'
      }
        this.noteService.noteServices (this.options).subscribe((Object) =>{
          this.snackbar.open("Note added successfully")
        
        this.noteService.changeMessage('note saved');
      }, (error) => {
        this.snackbar.open("error adding note")
      });
      this.show = !this.show;
      this.hide = !this.hide;
      this.color="#ffffff";
      this.title='';
       this.note='';
    }

    // saveReminder($event){
    //   this.remind = $event._validSelected
    // }

    removeReminder(){
      this.remind='';
    }

    openCollabDialog($event) {
      if ($event == "Collab...") {
        this.dialogRef = this.dialog.open(CollaboratorComponent, {
          width: 'auto',
          height: 'auto',
          data: {
            // noteIdList: id
          },
          panelClass: 'custom-modalbox'
        });
        this.dialogRef.afterClosed().subscribe(result => {
        });
      }
    }

    // openCheckList(){
    //   this.listToggle = !this.listToggle
    // }

    changeListToggle(event){
      console.log(event);
      this.listToggle = event
    }

    addlist(){
      let list={
        itemName: this.listItem,
        status : "open"
      }
      this.checklist.push(list)
      this.listItem=""
    }

    updateList(list){
    }

    addCheckList(list){
      list.status="open";
    }

    deleteCheckList(list){
      list.status=''
    }
    
    removeCheckList(list){
    list.status="close"
    }
  }

