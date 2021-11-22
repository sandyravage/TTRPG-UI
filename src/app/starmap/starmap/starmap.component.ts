import { Component, OnInit } from '@angular/core';
import { StarmapHubService } from 'src/app/hubs/starmap-hub.service';

@Component({
  selector: 'app-starmap',
  templateUrl: './starmap.component.svg',
  styleUrls: ['./starmap.component.scss']
})
export class StarMapComponent {
  fillColor = 'rgb(255, 0, 0)';

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}
