import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from './mock-customers';
import { ADDRESSES } from './location/mock-address';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor() { }
  customer = {};
  customers = [];
  addresses = [];
  selectedName = 'Show Customer';
  ngOnInit() {
    this.customers = CUSTOMERS;
    this.addresses = ADDRESSES;
  }

  getCustomer(customer) {
    this.customer = customer;
    this.selectedName = customer.name;
  }
}
