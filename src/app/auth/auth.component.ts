import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  authStatus: boolean;
  constructor(private autService: AuthService,private router: Router) { }

  ngOnInit(): void {

    this.authStatus = this.autService.isAuth;
  }


  onSignIn() {
    this.autService.signIn().then(
      () => {
        console.log("connection reussie");
        this.authStatus = this.autService.isAuth;
        this.router.navigate(['/societeview']);
      }
    )
  }


  onSignOut() {
    this.autService.signOut();
    this.authStatus = this.autService.isAuth;
  }

}
