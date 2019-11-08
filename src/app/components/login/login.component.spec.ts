import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule,ReactiveFormsModule,HttpClientModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('email should be invalid', () => {
    component.email.setValue('');
    expect(component.email.valid).toBeFalsy();
  });
  
  it('email should be valid',()=> {
    component.email.setValue('ww@brba.com');
    expect(component.email.valid).toBeTruthy()
  });
  
  it('password should be invalid', () => {
    component.password.setValue('');
    expect(component.password.valid).toBeFalsy();
  });
  it('password should be valid', () => {
    component.password.setValue('qazxsw');
    expect(component.password.valid).toBeTruthy();
  });
 
});
