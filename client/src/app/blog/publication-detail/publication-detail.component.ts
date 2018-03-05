import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PublicationsService } from '../../../services/publications.service';
import { SessionService } from '../../../services/session.service';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-publication-detail',
  templateUrl: './publication-detail.component.html',
  styleUrls: ['./publication-detail.component.css']
})
export class PublicationDetailComponent implements OnInit {

  

  publication:any;
  user:any;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private pubService: PublicationsService,
    private authService: SessionService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPublication(params['id']);
      this.user = this.authService.getUser();
  
    });
    var pageContent = document.getElementById("content"),
	pagecopy = pageContent.cloneNode(true),
	blurryContent = document.getElementById("blurryscroll");
	blurryContent.appendChild(pagecopy);
	window.onscroll = function() { blurryContent.scrollTop = window.pageYOffset; }
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

}