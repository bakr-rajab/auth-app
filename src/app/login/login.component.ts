import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;

  constructor(
    private router: Router,
    private authService: AuthService) {
  }

  logIn(credentials) {
    if (this.authService.login(credentials)) {
      this.router.navigate(['/']);
    } else {
      this.invalidLogin = true;
    }
    // @ts-ignore
    // .subscribe(response => {
    //   if (response) {
    //     this.router.navigate(['/']);
    //   } else {
    //     this.invalidLogin = true;
    //   }
    // });
  }

  ngOnInit() {
  }

}
