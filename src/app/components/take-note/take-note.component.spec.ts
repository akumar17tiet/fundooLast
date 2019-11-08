import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TakeNoteComponent } from './take-note.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

describe('TakeNoteComponent', () => {
  let component: TakeNoteComponent;
  let fixture: ComponentFixture<TakeNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeNoteComponent ],
      imports: [
        TextFieldModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
