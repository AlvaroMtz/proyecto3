import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private pS: ProfileService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getUserDetails(params['id']);
    });
  }
 
  getUserDetails(id) {
    this.pS.get(id)
      .subscribe((user) => {
        this.user = user;
      });
  }

}




  

