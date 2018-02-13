import {ErrorHandler, Injectable} from '@angular/core';


@Injectable()
export class Child2ErrorHandler extends ErrorHandler {

  handleError(error: any): void {
    console.log("Error handled by Child2ErrorHandler: " + error);
  }

}
