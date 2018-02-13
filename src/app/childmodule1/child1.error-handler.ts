import {ErrorHandler, Injectable} from '@angular/core';
import { RootErrorHandler } from '../root-error.handler';


@Injectable()
export class Child1ErrorHandler {

  handleError(error: any): void {
    console.log("Error handled by Child1ErrorHandler");
  }

}