import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FollowService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}

  private user:any;
//Post "/" para pushear una id
//Post "/new" para crear un nuevo modelo al crear un usuario
  postid(userId, currentId){
    return this.http.post(`${this.BASE_URL}/api/follow/`, userId, currentId )
      .map((res) => res.json());
  }
  postModel(userId){
    return this.http.post(`${this.BASE_URL}/api/follow/`, userId)
      .map((res) => res.json())
  }
}