import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment }  from '../environments/environment';

interface Follow {
  userId:string,
  currentId:string,
}

@Injectable()
export class FollowService {
    BASE_URL:string= environment.BASE_URL;
  // BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}

  getFollow(){
    return this.http.get(`${this.BASE_URL}/api/follow/` )
      .map((res) => res.json());
  }
  postId(userId, currentId){
    return this.http.post(`${this.BASE_URL}/api/follow/`, {userId, currentId} )
      .map((res) => res.json());
  }
  
  
}