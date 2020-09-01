import { Component, OnInit } from '@angular/core';

import { TravelService } from 'src/app/shared/service/travel.service';
import { Travel } from 'src/app/shared/model/travel.model';


@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {

  travelList: Travel[];

  constructor(
    public travelService: TravelService
  ) { }

  ngOnInit(): void {
    this.getTravels();
  }

  getTravels(){
    this.travelService.getTravels().subscribe(data => {
      this.travelList = data.content;

      console.log(this.travelList);
    });
  }

}
