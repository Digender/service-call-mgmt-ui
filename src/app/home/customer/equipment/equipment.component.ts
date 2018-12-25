import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  equipments = [
    'http://www.schwingstetterindia.com/admin/product/image2/5273821051bp350.jpg',
    'http://www.schwingstetterindia.com/admin/product/image2/4913599747sp1800.jpg',
    'http://www.schwingstetterindia.com/admin/product/image2/1984547549sp8800.jpg',
    'http://www.schwingstetterindia.com/admin/product/image2/7748100157sp1200.jpg',
  ];
  constructor() { }

  ngOnInit() {
  }

}
