import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CUSTOMERS } from '../customer/mock-customers';
import { Customer } from '../customer/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  id: number;
  customerList: Customer[];
  customer: Customer;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.customerList = CUSTOMERS;
    this.customer = this.customerList.find((cust) => cust.id === this.id);
  }

}
