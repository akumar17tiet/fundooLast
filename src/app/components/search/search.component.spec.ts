import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchComponent } from './search.component';
import {Pipe} from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchPipePipe } from 'src/app/pipes/search-pipe.pipe';
import { MAT_DIALOG_DATA, MatDialogRef ,MatDialogModule} from '@angular/material/dialog';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ,
        SearchPipePipe],
      imports: [
        
        // CommonModule
        // Pipe,
        // RouterTestingModule,
        MatDialogModule,
        HttpClientModule
        // FormsModule,
        //  ReactiveFormsModule 
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
    ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
