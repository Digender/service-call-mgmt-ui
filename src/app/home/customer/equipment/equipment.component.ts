import { Component, OnInit } from '@angular/core';
import { EQUIPMENTS } from './mock-equipment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  selectedImage = '';
  constructor(private route: ActivatedRoute) {
    const id = +route.snapshot.paramMap.get('eid');

    this.selectedImage = EQUIPMENTS[id - 1].img;
  }

  ngOnInit() {
  }

}
