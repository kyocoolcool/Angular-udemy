import {Injectable} from '@angular/core';


export class LoggingService {
  constructor() {
  }

  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
