import { Component, OnInit } from '@angular/core';
import { PreloadDataService } from './common/services/preload-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Service Management';
  constructor(private preloadService: PreloadDataService) {
    preloadService.loadData();
  }
  ngOnInit() {
  }
}
