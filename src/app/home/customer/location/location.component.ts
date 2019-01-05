import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  location = {};
  equipments = {};
  constructor(private route: ActivatedRoute) {
    const id: number = +route.snapshot.paramMap.get('lid');
    const cid: number = +route.snapshot.paramMap.get('id');

    if (id) {
      const locs = localStorage.getItem('locations');
      const LOACTIONS = JSON.parse(locs);
      this.location = LOACTIONS.find(x => x.id === id);
      const cust_loc_equip = JSON.parse(localStorage.getItem('cust_loc_equip'));
      const cust = cust_loc_equip.find(x => x.custId === cid);
      const equipmentIds = cust.locations.find(x => x.id === id).equipmentIds;
      const equips = localStorage.getItem('equipments');
      const equipments = JSON.parse(equips);
      this.equipments = equipments.filter(e => equipmentIds.includes(e.id));
    }
  }

  ngOnInit() {
  }

}
