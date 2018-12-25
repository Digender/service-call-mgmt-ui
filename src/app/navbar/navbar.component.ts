import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarMenus = [
    { name: 'HOME', link: 'home/customers' },
  ];
  isLoggedIn: Boolean;
  constructor() { }

  ngOnInit() {
    const session = localStorage.getItem('session');
    if (session) {
      this.isLoggedIn = true;
    }
  }

}
