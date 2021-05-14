import { Injectable } from "@angular/core";

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class UserService{
  constructor(private http:HttpClient){

  }

  getData(){

    let url="https://plnqfktz3l.execute-api.ap-south-1.amazonaws.com/test/resource-api";
    return this.http.get(url);
  }
}
