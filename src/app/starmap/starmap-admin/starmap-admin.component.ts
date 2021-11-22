import { Component, OnInit } from '@angular/core';
import { StarmapHubService } from 'src/app/hubs/starmap-hub.service';

@Component({
  selector: 'app-starmap-admin',
  templateUrl: './starmap-admin.component.html',
  styleUrls: ['./starmap-admin.component.scss']
})
export class StarmapAdminComponent {

  public mapUrl: string = "Input url here";

  constructor(private starmapHub: StarmapHubService) { }

  updateMap() {
    this.starmapHub.updateMap(this.mapUrl);
  }

  onKeyUp(event) {
    if(event.key === "Enter") {
      this.updateMap();
    }
  }
}
