import {ErrorHandler, Injectable} from '@angular/core';


@Injectable()
export class Child1ErrorHandler extends ErrorHandler {

  handleError(error: any): void {
    console.log("Error handled by Child1ErrorHandler: " + error);
  }

}
