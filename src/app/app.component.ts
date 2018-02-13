import {Component, ErrorHandler} from '@angular/core';
import {RootErrorHandler} from './root.error-handler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  errorMessages: string[] = [];

  constructor(private errorhandler: ErrorHandler) {
  }

  ngOnInit() {
    (this.errorhandler as RootErrorHandler).logger = this;
  }

  public log(message: string) {
    this.errorMessages.push(message);
  }
}
