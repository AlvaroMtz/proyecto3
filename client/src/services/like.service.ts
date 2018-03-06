import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LikeService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}
    
  add(post_id) {
    return this.http.post(`${this.BASE_URL}/api/likes`,{rel:post_id})
      .map((res) => res.json());
  }
  
  get(id) {
    return this.http.get(`${this.BASE_URL}/api/likes?rel=${id}`)
      .map((res) => res.json());
  }
}