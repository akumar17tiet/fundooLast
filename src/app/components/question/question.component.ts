import { Component, OnInit } from '@angular/core';
import {Question} from '../../model/question.model';
import { ConnectService } from "../../services/services.service";
import { ActivatedRoute,Router,Params } from "@angular/router";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  public questionModel: any = new Question;
  public editorContent: string;
  public replyContent: string;
  id : string;
  notes:any;
  froalaOpen:boolean=false;

  froalaOpen1: any = false;
  rate;
  viewReply: boolean = false;
  viewReply1: any = false;
  viewReply2: boolean = false;
  toggle: boolean = false;

  constructor(private noteService: ConnectService, public router: Router, public activ: ActivatedRoute) { }

  ngOnInit() {
    this.activ.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.getNoteDetail()
  }

  getNoteDetail(){
    let options = {
      purpose:"notes/getNotesDetail/"+ this.id
    }
    this.noteService.getNotes(options).subscribe(data=>{
      this.notes = data['data']['data'];
      console.log("NOTES",data['data']['data'])
    },(error)=>{
      console.log(error);
    })
  }

  submit() {
    this.questionModel = {
      message: this.editorContent,
      createdDate: Date.now(),
      notesId: this.id
    }
    let options = {
      data: this.questionModel,
      purpose: 'questionAndAnswerNotes/addQuestionAndAnswer'
    }
    this.noteService.postQuestionAnswer(options).subscribe((Obj) => {
      console.log(Obj);
    }, (error)=> {
      console.log(error);
    })
  }
  submitReply(id:string) {
    this.questionModel = {
      message: this.replyContent,
      createdDate: Date.now(),
      notesId: this.id
    }
    let options = {
      data: this.questionModel,
      purpose: 'questionAndAnswerNotes/reply/' + id
    }
    this.noteService.postQuestionAnswer(options).subscribe((Obj) => {
      console.log(Obj);
      this.getNoteDetail();
      this.replyContent='';
      this.editorContent='';
      this.toggleFroala();
    }, (error) => {
      console.log(error);
    })
  }

  closeQues() {
    this.router.navigate(['']);
  }
  
  toggleFroala1(id) {
    if(!this.toggle) {
      this.froalaOpen1 = id;
    }
    if(this.toggle) {
      this.froalaOpen1 = false;
    }
    this.toggle = !this.toggle;
  }

  toggleReply() {
    this.viewReply = !this.viewReply;
  }

  toggleReply1(id) {
    this.viewReply1 = id;    
  }

  toggleFroala() {
    this.froalaOpen = !this.froalaOpen;
  }

}
