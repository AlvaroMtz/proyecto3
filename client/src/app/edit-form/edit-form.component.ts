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
    private authService: SessionService,
    private profileService: ProfileService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getUserDetails(params['id']);
    });
  }
  getUserDetails(id) {
    this.profileService.get(id)
    .subscribe((user) => {
      this.user = user;
      console.log(this.user._id)
      });
  };
  editUser(user){
    console.log(user)
    this.profileService.edit(user)
    .subscribe((user) =>{
      this.user = user;
    })
  }

}
