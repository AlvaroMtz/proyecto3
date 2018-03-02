import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FollowService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}

  private user:any;

}