import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  lastlog: string;

  constructor(message: string) {
    console.log(message);
    console.log(this.lastlog);
    this.lastlog = message;
  }
}
