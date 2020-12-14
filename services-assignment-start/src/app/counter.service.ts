import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactive = 0;
  inactiveToActive = 0;
  incrementActiveToInactive() {
    this.activeToInactive++;
    console.log('Active To Inactive:' + this.activeToInactive);
  }

  incrementInactiveToActive() {
    this.inactiveToActive++;
    console.log('Inactive To Active:' + this.inactiveToActive);
  }
}
