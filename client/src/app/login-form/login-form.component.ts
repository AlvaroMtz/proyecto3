import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
    this.session.login(this.username,this.password)
    .catch(e => this.error = e)
    .subscribe(() => this.router.navigate(['home']));
  }

  logout(){
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe();
  }

}
