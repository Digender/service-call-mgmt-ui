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
  locations = [];
  cust_loc_equip  = [];
  meta = {};
  selectedName = 'Show Customer';
  ngOnInit() {
    this.customers = JSON.parse(localStorage.getItem('customers'));
    this.locations = JSON.parse(localStorage.getItem('locations'));
    this.cust_loc_equip = JSON.parse(localStorage.getItem('cust_loc_equip'));
  }

  getCustomer(customer) {
    this.customer = customer;
    this.selectedName = customer.name;
    const cust = this.cust_loc_equip.find(x => x.custId === customer.id);
    this.addresses = this.locations
      .filter(l => cust.locations.some(cl => cl.id === l.id));
    this.meta = {
      locations : cust.locations.length,
    };
  }
}
