import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  selectedOption = 1;
  errorMsg = '';
  userTypes = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Group Leader' },
    { id: 3, name: 'Service Engineer' },
  ];
  username = '';
  password = '';
  type = 0;
  users = [];
  user = {};
  constructor(private router: Router) { }

  ngOnInit() {
    this.users = JSON.parse(window.localStorage.getItem('users'));
    const session = window.localStorage.getItem('session');
    if (session) {
      this.user = JSON.parse(session);
      this.router.navigate(['/home/customers ']);
    }
  }

  login() {
    this.user = this.users.find((user) => {
      return (
        user.username === this.username
        && user.password === this.password
        && user.type === this.selectedOption
      );
    });
    if (this.user) {
      window.localStorage.setItem('session', JSON.stringify(this.user));
      this.router.navigate(['/home/customers']);
    } else {
      this.errorMsg = 'Your username or password is incorrect';
    }
  }

}
