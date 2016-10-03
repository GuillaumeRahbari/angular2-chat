import {Injectable} from '@angular/core';

@Injectable()
export class UuidService {

  private counter: number;

  constructor() {
    this.counter = -1;
  }

  generateUUID() {
    let d = new Date();
    this.counter = this.counter + 1;

    return d.getTime() + "-" + this.counter;
  }

}
