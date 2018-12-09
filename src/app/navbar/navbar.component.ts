import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarMenus = [
    { name: 'HOME', link: '' },
    { name: 'PROFILE', link: '' },
    { name: 'PRODUCTS', link: '' },
    { name: 'TECHNOLOGY', link: '' },
    { name: 'SERVICES', link: '' },
    { name: 'TRAINING', link: '' },
    { name: 'MEDIA ROOM', link: '' },
    { name: 'CAREERS', link: '' },
    { name: 'CONTACT', link: '' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
