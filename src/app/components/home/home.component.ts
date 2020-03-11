import { element } from 'protractor';
import { UpdatecontactComponent } from './../updatecontact/updatecontact.component';
import { ContactsService } from './../../services/contacts.service';
import { Contacts } from './../../interfaces/contacts';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletecontactComponent } from '../deletecontact/deletecontact.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  contlist:Contacts[]=[];
  Allcons:Contacts[]=[];
  isAdd:boolean = false;
  ifPhoneExist:boolean = false;
  ifPhoneExistName:string = '';
  page = 1;
  pageSize = 6;
  collectionSize:number;

  constructor(private conser:ContactsService,public dialog: MatDialog){
    this.conser.getContacts().subscribe(( data:Contacts[] ) => {
      this.Allcons = data;
      this.contlist = this.Allcons
      this.collectionSize = this.Allcons.length+1;
    });
  }
  ngOnInit() {
    }
  //============================== init contant of HTML =====================================
  get contacts() {
    return this.contlist
      .map((contact) => ({...contact}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  
  isadd(){
    this.isAdd = !this.isAdd;
  }
  //============================== Add contact methods ========================================
  addContact(f1:string,f2:string){
    let newcon:Contacts ={
      name : f1,
      phonenumber :f2
    } 
    this.conser.postContact(newcon).subscribe( data => {
    })
  }
  validatephone(phoneNum:string){
    for (let index = 0; index < this.Allcons.length; index++) {
      if(this.Allcons[index].phonenumber == phoneNum){
        this.ifPhoneExist = true;
        this.ifPhoneExistName = this.Allcons[index].name;
        break;
      }else{
        this.ifPhoneExist = false;
        this.ifPhoneExistName = '';
      }
    }
  }
  //============================== searchByName method ========================================
  searchByName(name:string){
    this.contlist=[];
    if(name){
      this.Allcons.forEach(element => {
        if(element.name.toLowerCase().includes(name.toLowerCase())){
          this.contlist.push(element)
        }
      });
    }else {
      this.contlist = this.Allcons
    }
  }
  //============================== open dialog methods ========================================
  openDeleteContact(contact): void{
    let dialogRef = this.dialog.open(DeletecontactComponent,{
      data : { mydata :contact}
    });
  }
  openupdateContact(contact): void{
    let dialogRef = this.dialog.open(UpdatecontactComponent,{
      data : { mydata :contact}
    });
  }
}
