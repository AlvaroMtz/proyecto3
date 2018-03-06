import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicationsService } from '../../services/publications.service';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { LikeService } from '../../services/like.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  lat: number = 40.393955;
  lng: number = -3.818142;
  
  publications:Array<any>
  user: any;
  likes: number;
  error:string;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private pubService: PublicationsService,
    private authService: SessionService,
    private likeService: LikeService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pubService.getList().subscribe(list => {
        this.publications = list;
        this.user = this.authService.getUser();
      })
    });
  }

  getPostLikes(id){
    this.likeService.get(id).subscribe(a => {
      this.likes = a.length;
    })
  }

  logout(){
    this.authService.logout()
    .catch(e => this.error = e)
    .subscribe();
  }
 
}
