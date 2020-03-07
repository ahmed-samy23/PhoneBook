import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpAPIsService {
  APIURL:string='http://localhost:3000/api/Contacts';
  httpOptions = {
  headers: new HttpHeaders({
  "access-control-allow-credentials": "true",
  "connection": "keep-alive",
  "content-length": "2",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 05 Mar 2020 20:22:21 GMT",
  "etag": "W/\"2-l9Fw4VUO7kr8CvBlt4zaMCqXZ0w\"",
  "strict-transport-security": "max-age=0; includeSubDomains",
  "vary": "Origin, Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "DENY",
  "x-xss-protection": "1; mode=block",
  "obserable" : "true"
})
}
  
}
