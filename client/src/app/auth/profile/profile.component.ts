import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../../services/profile.service';
import { SessionService } from '../../../services/session.service';
import { PublicationsService } from '../../../services/publications.service';
import { FollowService } from '../../../services/follow.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any = {
    _id: ""
  }
  publication:any;
  userId:any;
  currentId:any;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private pS: ProfileService,
    private sessionService: SessionService,
    private pubService: PublicationsService,
    private followService: FollowService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getUserDetails(params['id']);
      this.getUserPublication(params['id']);
      this.pubService.getList().subscribe(list => {
        this.publication = list;
      }) 
    });
  }
  
  getUserPublication(id) {
    this.pubService.getUserPublication(id)
      .subscribe((publication) => {
        this.publication = publication;       
      });
  }
 
  getUserDetails(id) {
    this.pS.get(id)
      .subscribe((user) => {
        this.user = user;
      });
  }

  followUser(userId, currentId){
    console.log(userId, currentId)
    this.followService.postid(userId, currentId)
      .subscribe(()=>{})
  }
  newFollowModel(userId){
    this.followService.postModel(userId)
      .subscribe(()=>{})
  }
}




  

