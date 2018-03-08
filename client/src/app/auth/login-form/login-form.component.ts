import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { window } from 'rxjs/operator/window';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  

  username:string;
  password:string;
  error:string;
  constructor(
    public session:SessionService,
    private router:Router,
    private route: ActivatedRoute,  
  ) { }

  ngOnInit() {
  }

  login(){
    console.log(this.username, this.password)
    this.session.login(this.username,this.password)
    .catch(e => this.error = e)
    .subscribe(user => console.log(`Welcome ${user.username}`));
    this.router.navigateByUrl('/')
  }

  logout(){
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe();
  }

}
