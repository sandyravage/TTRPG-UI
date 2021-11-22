import { Injectable, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarmapHubService {

  private starmapConnection: HubConnection;
  private emitter: Subscriber<string>;
  public $displayText: Observable<string>;

  constructor() { 
    this.$displayText = new Observable(e => this.emitter = e);
    this.starmapConnection = new HubConnectionBuilder().withUrl('http://localhost:22754/starmap').build();
    this.starmapConnection.on('mapChanged', (mapUrl: string) => {
      this.emitter.next(mapUrl);
    });
    this.starmapConnection.start().catch(err => console.error(err));
  }

  updateMap(mapUrl: string) {
    this.starmapConnection.send('updateMap', mapUrl);
  }
}
