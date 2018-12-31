import { Injectable } from '@angular/core';
import { ADDRESSES } from 'src/app/home/customer/location/mock-address';
import { EQUIPMENTS } from 'src/app/home/customer/equipment/mock-equipment';
import { CUSTOMERS } from 'src/app/home/customer/mock-customers';

@Injectable({
  providedIn: 'root'
})
export class PreloadDataService {

  constructor() {
  }

  loadData() {
    const users = [
      { id: 1, name: 'Admin', type: 1, username: 'admin', password: '123456' },
      { id: 2, name: 'Digender', type: 2, username: 'digender', password: '123456' },
      { id: 3, name: 'Swapnil', type: 3, username: 'swapnil', password: '123456' },
    ];
    window.localStorage.setItem('users', JSON.stringify(users));
    window.localStorage.setItem('customers', JSON.stringify(CUSTOMERS));
    window.localStorage.setItem('locations', JSON.stringify(ADDRESSES));
    window.localStorage.setItem('equipments', JSON.stringify(EQUIPMENTS));
    const CUST_LOCATION_EQUIPMENT = [{
      custId: 1, locations: [{ id: 1, equipmentIds: [1, 2] }, { id: 2, equipmentIds: [2] }],
    }, {
      custId: 2, locations: [{ id: 2, equipmentIds: [1] }, { id: 3, equipmentIds: [1, 2, 3] }],
    }, {
      custId: 3, locations: [{ id: 3, equipmentIds: [1, 3] }],
    }];
    window.localStorage.setItem('cust_loc_equip', JSON.stringify(CUST_LOCATION_EQUIPMENT));
  }
}
