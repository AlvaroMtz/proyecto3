import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

interface Publication {
  title:string,
  text:string,
  userId: string,
  lat:number,
  lng: number,
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
  
  getPublication(id) {
    return this.http.get(`${this.BASE_URL}/api/publications/publication/${id}`)
      .map((res) => res.json());
  }

  getUserPublication(id) {
    return this.http.get(`${this.BASE_URL}/api/publications/user-publication/${id}`)
      .map((res) => res.json());
  }


  newPub(title:string, text:string, userId:string, lat:number, lng:number){
    return this.http.post(`${this.BASE_URL}/api/publications`, {title, text, userId, lat, lng})
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