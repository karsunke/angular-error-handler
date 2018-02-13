import { Component, OnInit } from '@angular/core';
import { Child1Error } from '../../error-models/models';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html'
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    throw new Child1Error('error from childmodule1');
  }

}
