import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PublicationsService } from '../../services/publications.service';
import { SessionService } from '../../services/session.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-new-publication',
  templateUrl: './new-publication.component.html',
  styleUrls: ['./new-publication.component.css']
})
export class NewPublicationComponent implements OnInit {
  user: any;

  title: Array<any>;
  id: any;
  text: Array<any>;

  publications: any;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private pubService: PublicationsService,
    private authService: SessionService,
    private profileService: ProfileService,
  ) { }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pubService.getList().subscribe(list => {
        this.publications = list;
        this.user = this.authService.getUser();
        console.log(this.user)
      })
    });
  };
  newPub(title, text, id, name ){
      this.pubService.newPub(title, text, id, name)
      .subscribe()
    }
}
