import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import {Routes,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import { ForgetComponent } from './forget/forget.component';
import { ResetComponent } from './reset/reset.component';
import { HttpClientModule } from '@angular/common/http';
import { ConnectService } from '../app/services/services.service';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';

import { TakeNoteComponent } from './components/take-note/take-note.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { IconlistComponent } from './components/iconlist/iconlist.component';
import { DialogboxComponent } from './components/dialogbox/dialogbox.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { NotesComponent } from './components/notes/notes.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';

import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { IconTrashComponent } from './components/icon-trash/icon-trash.component';

import {TextFieldModule} from '@angular/cdk/text-field';
import { DataServiceService } from "./services/data-service.service";
import { SearchComponent } from './components/search/search.component';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { ImageDialogComponent } from './components/image-dialog/image-dialog.component';
import { ImageCropperModule } from "ngx-image-cropper";
import { LabelsComponent } from './components/labels/labels.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CollaboratorComponent } from './components/collaborator/collaborator.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material";
import { QuestionComponent } from './components/question/question.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { MatDividerModule } from '@angular/material/divider';

// import { NoteServiceService } from "./services/notes-services/note-service.service";

import {SnackbarService} from '../app/services/snackbar/snackbar.service';
import { ProductComponent } from './components/product/product.component';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgetComponent,
    ResetComponent,
    
    DashboardComponent,
    TakeNoteComponent,
    DialogboxComponent,
    DisplayNotesComponent,
    IconlistComponent,
    NotesComponent,
    ReminderComponent,
    ArchiveComponent,
    TrashComponent,
    IconTrashComponent,
    EditDialogComponent,
    
    SearchPipePipe,
    SearchComponent,
    ImageDialogComponent,
    LabelsComponent,
    CollaboratorComponent,
    QuestionComponent,
    ProductComponent,
    ProductDialogComponent 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatExpansionModule,
    HttpClientModule ,
    MatTooltipModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatGridListModule,
    MatDialogModule,
    ImageCropperModule,
    TextFieldModule,
    MatChipsModule,
    MatCheckboxModule,
    
    MatNativeDateModule,
    MatDatepickerModule,
    MatSnackBarModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    MatTabsModule   

  ],
  providers: [
    ConnectService,
    // NoteServiceService,
    DataServiceService,
    MatDatepickerModule,
    SnackbarService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
