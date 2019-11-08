import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IconTrashComponent } from './icon-trash.component';
import { MatMenuModule} from '@angular/material/menu';

describe('IconTrashComponent', () => {
  let component: IconTrashComponent;
  let fixture: ComponentFixture<IconTrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconTrashComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports:[ MatMenuModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
