import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PublicationsService } from '../../../services/publications.service';
import { SessionService } from '../../../services/session.service';
import { ProfileService } from '../../../services/profile.service';
import { LikeService } from '../../../services/like.service';


@Component({
  selector: 'app-publication-detail',
  templateUrl: './publication-detail.component.html',
  styleUrls: ['./publication-detail.component.css']
})
export class PublicationDetailComponent implements OnInit {

  

  publication:any;
  user:any;
  likes: number;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private pubService: PublicationsService,
    private authService: SessionService,
    private likeSevice:LikeService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPublication(params['id']);
      this.user = this.authService.getUser();
  
    });
  }

  getPublication(id) {
    this.pubService.getPublication(id)
      .subscribe((publication) => {
        this.publication = publication; 
        console.log(publication)       
      });
  }

  deletePublication(){
    this.pubService.remove(this.publication._id).subscribe( m => {
      this.router.navigate(['/']);
    });
  }
  getPostLikes(id){
    this.likeSevice.get(id).subscribe(a => {
      this.likes = a.length;
    })
  }

  addLike(){
    this.likeSevice.add(this.publication._id).subscribe( () => {
      this.getPostLikes(this.publication._id)
    })
  }
  

}