import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user = {};
  isLoggedIn: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    const session = window.localStorage.getItem('session');
    if (session) {
      this.user = JSON.parse(session);
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
      this.router.navigate(['/login']);
    }
  }

}
