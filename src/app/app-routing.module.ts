import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent } from './components/register/register.component';
import { LoginComponent } from "./components/login/login.component";
import { ForgetComponent } from './forget/forget.component';
import {ResetComponent} from './reset/reset.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DialogboxComponent } from "./components/dialogbox/dialogbox.component";
import { IconlistComponent } from "./components/iconlist/iconlist.component";
import{AuthGuard} from "../auth.guard";
import { TakeNoteComponent } from './components/take-note/take-note.component';

const routes: Routes = [
  {
    path :'login', component: LoginComponent
  },
  {
    path :'register',component:RegisterComponent
  },
  {
    path :'forget',component:ForgetComponent
  },
  {
    path :'reset',component:ResetComponent
  },
  {
    path:'',component:DashboardComponent,canActivate:[AuthGuard],children:[

    ]
  },
  {
    path:'takeNotes', component:TakeNoteComponent
  },
  {
    path : 'iconlist',component:IconlistComponent
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
