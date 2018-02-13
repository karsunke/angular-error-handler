import { Component, OnInit } from '@angular/core';
import { Child2Error } from '../../error-models/models';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html'
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    throw new Child2Error('error from childmodule2');
  }

}
