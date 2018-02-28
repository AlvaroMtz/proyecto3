import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PublicationsService } from '../../services/publications.service';
import { SessionService } from '../../services/session.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  user:any;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private pubService: PublicationsService,
    private authService: SessionService,
    private profileService: ProfileService,
  ) { }

  ngOnInit() {
  }

  editUser(user){
    this.profileService.edit(user)
    .subscribe((user) =>{
      this.user = user;
    })
  }

}
