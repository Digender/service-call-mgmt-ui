import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'service-mgmt-ui';
  ngOnInit() {
    const users = [
      { id: 1, name: 'Admin', type: 1, username: 'admin', password: '123456' },
      { id: 2, name: 'Digender', type: 2, username: 'digender', password: '123456' },
      { id: 3, name: 'Swapnil', type: 3, username: 'swapnil', password: '123456' },
    ];
    window.localStorage.setItem('users', JSON.stringify(users));
  }
}
