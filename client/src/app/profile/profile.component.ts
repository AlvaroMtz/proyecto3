import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { SessionService } from '../../services/session.service';
import { PublicationsService } from '../../services/publications.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  publications:any;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private pS: ProfileService,
    private sessionService: SessionService,
    private pubService: PublicationsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getUserDetails(params['id']);
      this.pubService.getList().subscribe(list => {
        this.publications = list;
        this.user = this.pS.getUser();
      })
    
    });
  }
 
  getUserDetails(id) {
    this.pS.get(id)
      .subscribe((user) => {
        this.user = user;
      });
  }



}




  

