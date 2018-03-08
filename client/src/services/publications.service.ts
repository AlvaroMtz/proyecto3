import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment }  from '../environments/environment';

interface Publication {
  title: string,
  text: string,
  userId: string,
  resume: string,
  lat: number,
  lng: number,
}

interface Coment {
  description: string,
  creatorid: string,
  publication_id: string,
}

@Injectable()
export class PublicationsService {
  BASE_URL:string= environment.BASE_URL;
  // BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) { }
  private publication: Publication;
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

  newPub(title: string, text: string, userId: string, resume: string, lat: number, lng: number) {
    return this.http.post(`${this.BASE_URL}/api/publications`, { title, text, resume, userId, lat, lng })
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
  getComent(id) {
    return this.http.get(`${this.BASE_URL}/api/publications/${id}/coment`)
      .map((res) => res.json());
  }

  postComent(id: string, description: string, creatorId: string) {
    return this.http.post(`${this.BASE_URL}/api/publications/${id}/coment`, {description, creatorId} )
      .map((res) => res.json());
  }
}