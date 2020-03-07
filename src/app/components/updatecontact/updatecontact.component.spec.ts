import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecontactComponent } from './updatecontact.component';

describe('UpdatecontactComponent', () => {
  let component: UpdatecontactComponent;
  let fixture: ComponentFixture<UpdatecontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
