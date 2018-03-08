import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment }  from '../environments/environment';

@Injectable()
export class ProfileService {
  BASE_URL:string= environment.BASE_URL;
  // BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}

  private user:any;

  getUser(){
    return this.user;
  }
    
  getList() {
    return this.http.get(`${this.BASE_URL}/api/user`)
      .map((res) => res.json());
  }
  
  get(id) {
    return this.http.get(`${this.BASE_URL}/api/user/${id}`)
      .map((res) => res.json());
  }
  
  edit(user) {
    return this.http.put(`${this.BASE_URL}/api/user/${user._id}`, user)
    .map((res) => res.json());
  }
  
  remove(id) {
    return this.http.get(`${this.BASE_URL}/api/user/delete/${id}`)
      .map((res) => res.json());
  }
}