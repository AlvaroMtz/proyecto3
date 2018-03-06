import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FollowService } from '../../../services/follow.service';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  username:string;
  password:string;
  email:string;
  name:string;
  surname:string;

  error:string;
  constructor(
    public session:SessionService,
    private router:Router,
    private route: ActivatedRoute,
    private followService: FollowService,  
  ) { }

  ngOnInit() {
  }

  signup(){
    console.log("componente")
    console.log(this.username,this.password,this.email,this.name,this.surname)
    this.session.signup(this.username,this.password, this.email, this.name, this.surname)
    .catch(e => this.error = e)
    .subscribe( m => {
      console.log("salgo del componente")
      this.router.navigate(['home']);
    });
  }

  logout(){
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe();
  }

}
