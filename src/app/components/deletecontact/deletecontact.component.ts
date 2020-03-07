import { ContactsService } from './../../services/contacts.service';
import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-deletecontact',
  templateUrl: './deletecontact.component.html',
  styleUrls: ['./deletecontact.component.css']
})
export class DeletecontactComponent implements OnInit {
  constructor(private conser:ContactsService,public dialogRef: MatDialogRef<DeletecontactComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: any) {
    }

  ngOnInit() {
  }
  //============================== Delete contact methods ========================================
  Deletecontact(){
    this.conser.deleteContact(this.data.valueOf()['mydata'].id).subscribe( data => {
      this.dialogRef.close();
      window.location.reload();
    })
  }
  //============================== button of cansel methods ========================================
  onNoClick(){
    this.dialogRef.close();
  }

}
