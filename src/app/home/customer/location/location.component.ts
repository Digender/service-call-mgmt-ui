import { Component, OnInit } from '@angular/core';
import { ADDRESSES } from './mock-address';
import { ActivatedRoute } from '@angular/router';
import { EQUIPMENTS } from '../equipment/mock-equipment';

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
    if (id) {
      this.location = ADDRESSES.find(x => x.id === id);
      this.equipments = EQUIPMENTS;
    }
  }

  ngOnInit() {
  }

}
