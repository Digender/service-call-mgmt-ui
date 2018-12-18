import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  selectedOption = '1';
  userTypes = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Group Leader' },
    { id: 3, name: 'Service Engineer' },
  ];
  username = '';
  password = '';
  users = [];
  user = {};
  constructor(private router: Router) { }
  ngOnInit() {
    this.users = JSON.parse(window.localStorage.getItem('users'));
    const session = window.localStorage.getItem('session');
    if (session) {
      this.user = JSON.parse(session);
      this.router.navigate(['/home']);
    }
  }

  login() {
    this.user = this.users.find((user) => {
      return user.username === this.username && user.password === this.password;
    });
    if (this.user) {
      window.localStorage.setItem('session', JSON.stringify(this.user));
      this.router.navigate(['/home']);
    } else {
      alert('Your Creds are wrong. Please reenter correct password');
    }
  }

}
