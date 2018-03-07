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
  coments:any;

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
      this.likeSevice.get(params['id']).subscribe(a => {
        this.likes = a.length;
        this.user = this.authService.getUser();
      })
      this.pubService.getComent(params['id']).subscribe(a =>{
        this.coments = a;
      })
    });
  }

  getPublication(id) {
    this.pubService.getPublication(id)
      .subscribe((publication) => {
        this.publication = publication;    
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

  postComent(){
    this.pubService.postComent(this.publication._id).subscribe( m => {
      this.router.navigate(['/']);
    });
  }
  

}