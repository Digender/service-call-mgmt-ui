import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from './mock-customers';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor() { }
  customers = [];
  ngOnInit() {
    this.customers = CUSTOMERS;
  }

}
