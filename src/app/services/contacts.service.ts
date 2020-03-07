import { HttpAPIsService } from './http-apis.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacts } from '../interfaces/contacts';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  
  constructor(private Http:HttpClient,private httpAPI:HttpAPIsService) { }
  getContacts():Observable<Contacts[]>{
    return this.Http.get<Contacts[]>(this.httpAPI.APIURL,this.httpAPI.httpOptions)
  }
  postContact(newcontact:Contacts):Observable<Contacts>{
    return this.Http.post<Contacts>(this.httpAPI.APIURL,newcontact,this.httpAPI.httpOptions)
  }
  putContact(putcontact:Contacts):Observable<Contacts>{
    let Url:string = this.httpAPI.APIURL+'/'+ putcontact.id.toString()
    return this.Http.put<Contacts>(Url,putcontact,this.httpAPI.httpOptions)
  }
  deleteContact(ConID:number){
    let Url:string = this.httpAPI.APIURL+'/'+ ConID.toString()
    return this.Http.delete(Url,this.httpAPI.httpOptions)
  }
}
