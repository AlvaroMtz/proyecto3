import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicationsService } from '../../services/publications.service';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { LikeService } from '../../services/like.service';
import { FollowService } from '../../services/follow.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  lat: number = 40.393955;
  lng: number = -3.818142;
  follow: any;
  publications:Array<any>;
  user: any;
  likes: Array<any> = [];
  error:string;
  likeID:Array<any> = [];
  
  
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private pubService: PublicationsService,
    private authService: SessionService,
    private likeService: LikeService,
    private followService: FollowService
    
  ) { 
    this.route.params.subscribe(params => {
      this.pubService.getList().subscribe(list => {
        this.publications = list;
        this.user = this.authService.getUser();
      })
    });
  }
  

  ngOnInit() {
        this.followService.getFollow().subscribe(follow => {
          this.follow = follow;
          this.getLikes(this.publications)
        })

  }

  getPostLikes(id){
    this.likeService.get(id).subscribe(a => {
      this.likes.push(a)
    })
    console.log(this.likes);
  }

  logout(){
    this.authService.logout()
    .catch(e => this.error = e)
    .subscribe();
  }

  getLikes(publications){
    for(var i=0; i<this.publications.length; i++ ){
      this.likeID.push(publications[i]._id)
      
    }
    for(i=0; i<this.likeID.length; i++){
      this.getPostLikes(this.likeID[i]);
    }
  }
}
