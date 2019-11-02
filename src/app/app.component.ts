import {Component, OnInit} from '@angular/core';
import {LogUpdateService} from './services/log-update.service';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  title = 'BinaryToDec';

  constructor(private logUpdate: LogUpdateService, private swUpdate: SwUpdate) {
  }

  ngOnInit(): void {

    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          this.clearCache(); // un register sw?
          window.location.reload();
        }
      });
    }
  }

  // Delete cache
  private clearCache() {

    if ('caches' in window) {
      caches.keys().then(keyList => {
        return Promise.all(keyList.map(key => {
          return caches.delete(key);
        }));
      });
    }
  }

}
