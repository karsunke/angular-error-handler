import {ErrorHandler, Injectable} from '@angular/core';
import { Child1Error, Child2Error } from './error-models/models';
import { Child2ErrorHandler } from './childmodule2/child2.error-handler';
import { Child1ErrorHandler } from './childmodule1/child1.error-handler';


@Injectable()
export class RootErrorHandler implements ErrorHandler {

  constructor(private child2Handler: Child2ErrorHandler,
     private child1Handler: Child1ErrorHandler) {}

  handleError(error: any): void {
    if(error instanceof Child1Error) {
      this.child1Handler.handleError(error);
    } else if(error instanceof Child2Error) {
      this.child2Handler.handleError(error);
    }
  }
}
