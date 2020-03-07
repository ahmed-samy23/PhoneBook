import { Contacts } from './../../interfaces/contacts';
import { NgForm } from '@angular/forms';
import { ContactsService } from './../../services/contacts.service';
import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatecontact',
  templateUrl: './updatecontact.component.html',
  styleUrls: ['./updatecontact.component.css']
})
export class UpdatecontactComponent implements OnInit {
  contactEdit:Contacts;
  Allcons:Contacts[]=[];
  ifPhoneExist:boolean = false;
  ifPhoneExistName:string = '';
  constructor(private conser:ContactsService,private router:Router,public dialogRef: MatDialogRef<UpdatecontactComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: any) {
      this.contactEdit = this.data.valueOf()['mydata']
      this.conser.getContacts().subscribe(( data:Contacts[] ) => {
        this.Allcons = data;
      });
    }

  ngOnInit() {
  }
  //============================== update contact methods ========================================
  updateContact(){
    this.conser.putContact(this.contactEdit).subscribe( data => {
      this.dialogRef.close();
      window.location.reload();
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
  onNoClick(){
    this.dialogRef.close();
  }

}
