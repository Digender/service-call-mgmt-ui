import { Component, OnInit } from '@angular/core';
import { EQUIPMENTS } from './mock-equipment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  equipment;
  selectedImage = '';
  constructor(private route: ActivatedRoute) {
    const id = +route.snapshot.paramMap.get('eid');
    this.equipment = EQUIPMENTS[id - 1] || {};
  }

  ngOnInit() {
  }

  raiseTicket() {
    localStorage.setItem('tickets', JSON.stringify({
      id: 1
    }));
  }
}
