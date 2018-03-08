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
  currentUser:any;
  follow:any;
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
      this.pubService.getUserPublication(params['id']).subscribe(list => {
        this.publication = list;
      }) 
      this.followService.getFollow().subscribe(follow => {
        this.follow = follow;
        this.currentUser = this.sessionService.getUser();
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
    this.followService.postId(userId, currentId)
      .subscribe(()=>{})
  }
  editUser(user){
    console.log(user)
    this.pS.edit(user)
    .subscribe((user) =>{
      this.user = user;
    })
  }

}




  

