import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicationsService } from '../../services/publications.service';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  publications:Array<any>
  user: any;
  likes: number
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private pubService: PublicationsService,
    private authService: SessionService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pubService.getList().subscribe(list => {
        this.publications = list;
        this.user = this.authService.getUser();
        console.log(this.user)
      })
    });
  }
 
}
