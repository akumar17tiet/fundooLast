import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent } from './components/register/register.component';
import { LoginComponent } from "./components/login/login.component";
import { ForgetComponent } from './forget/forget.component';
import {ResetComponent} from './reset/reset.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DialogboxComponent } from "./components/dialogbox/dialogbox.component";
import { IconlistComponent } from "./components/iconlist/iconlist.component";
import {AuthGuard} from "../auth.guard";
import { TakeNoteComponent } from './components/take-note/take-note.component';

import { NotesComponent } from './components/notes/notes.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { TrashComponent } from './components/trash/trash.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { DisplayNotesComponent } from "./components/display-notes/display-notes.component";
import { EditDialogComponent } from "./components/edit-dialog/edit-dialog.component";
import { SearchComponent } from "./components/search/search.component";
import { ImageDialogComponent } from "./components/image-dialog/image-dialog.component";
import { LabelsComponent } from './components/labels/labels.component';
import { CollaboratorComponent } from "./components/collaborator/collaborator.component";
import { QuestionComponent } from './components/question/question.component';

import { ProductComponent } from './components/product/product.component';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import { CartComponent } from "./components/cart/cart.component";

const routes: Routes = [
  {
    path :'login', component: LoginComponent
  },
  {
    path: 'product', component: ProductComponent  
  },
  {
    path: 'product-dialog', component: ProductDialogComponent
  },
  {
    path :'register',component:RegisterComponent
  },
  {
    path :'forget',component:ForgetComponent
  },
  {
    path: 'resetpassword/:token', component: ResetComponent
  },
  {
    path:'',component:DashboardComponent,canActivate:[AuthGuard],children:[
      {path :'', component:NotesComponent},
      {path :'reminder', component:ReminderComponent},
      {path :'archive', component:ArchiveComponent},
      {path :'trash', component:TrashComponent},
      {path :'search', component:SearchComponent},
      {path :'image-card',component:ImageDialogComponent},
      {path: 'label/:labelname', component: LabelsComponent},
      {path: 'QuestionAnswer/:id', component: QuestionComponent}

    ]
  },
  {
    path :'edit-dialog', component:EditDialogComponent
  },
  {
    path:'takeNotes', component:TakeNoteComponent
  },
  {
    path : 'iconlist', component:IconlistComponent
  },
  {
    path: 'display-cards', component: DisplayNotesComponent
  },
  
  {
    path: 'collab' , component: CollaboratorComponent
  },
  {
    path: 'shoppingCart' , component: CartComponent
  },
{
  path : 'dialog' , component: DialogboxComponent
},
  {
    path: '**' , redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
