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
    if (id) {
      const locs = localStorage.getItem('locations');
      const LOACTIONS = JSON.parse(locs);
      this.location = LOACTIONS.find(x => x.id === id);
      const equips = localStorage.getItem('locations');
      const EQUIPMENTS = JSON.parse(equips);
      this.equipments = EQUIPMENTS;
    }
  }

  ngOnInit() {
  }

}
