import {Injectable} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})

export class LogUpdateService {

  constructor(private updates: SwUpdate) {}

  public notify() {

    this.updates.available.subscribe(event => {
      console.log('Current version is: ' + event.current.hash);
      console.log('Available version is: ' + event.available.hash);
    });

    this.updates.activated.subscribe(event => {
      console.log('Old version was: ' + event.previous.hash);
      console.log('New version is: ' + event.current.hash);
    });
  }

}
