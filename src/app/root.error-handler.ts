import {ErrorHandler, Injectable} from '@angular/core';
import {AppComponent} from './app.component';

@Injectable()
export class RootErrorHandler extends ErrorHandler {

  public logger: AppComponent;

  handleError(error: any): void {
    if (this.logger) {
      this.logger.log("Error handled by RootErrorHandler: " + error);
      console.log("Error handled by RootErrorHandler: " + error)
    }
  }

}
