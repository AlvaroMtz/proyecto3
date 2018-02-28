import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

interface Publication {
  title:string,
  text:string,
  userId: string,
}

@Injectable()
export class PublicationsService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}
  private publication:Publication;
  getList() {
    return this.http.get(`${this.BASE_URL}/api/publications`)
      .map((res) => res.json());
  }
  
  get(id) {
    return this.http.get(`${this.BASE_URL}/api/publications/${id}`)
      .map((res) => res.json());
  }

  newPub(title:string, text:string, userId:string){
    return this.http.post(`${this.BASE_URL}/api/publications`, {title, text, userId})
    .map((res) => res.json());
  }
  
  edit(publications) {
    return this.http.put(`${this.BASE_URL}/api/publications/${publications.id}`, publications)
      .map((res) => res.json());
  }
  
  remove(id) {
    return this.http.get(`${this.BASE_URL}/api/publications/delete/${id}`)
      .map((res) => res.json());
  }
}