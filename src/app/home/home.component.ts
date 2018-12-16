import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user = {};
  constructor(private router: Router) { }

  ngOnInit() {
    const session = window.localStorage.getItem('session');
    if (session) {
      this.user = JSON.parse(session);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
