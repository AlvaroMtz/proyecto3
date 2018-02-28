import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicationsService } from '../../services/publications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  publications:any;
  likes: number
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private pS: PublicationsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pS.getList().subscribe(list => this.publications = list)
    });
  }
 
}
