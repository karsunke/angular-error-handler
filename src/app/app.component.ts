import {Component, ErrorHandler} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  errorMessages: string[] = [];

  constructor(private errorhandler: ErrorHandler) {
  }

  ngOnInit() {
  }

  public log(message: string) {
    this.errorMessages.push(message);
  }
}
