import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html'
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    throw new Error('error from childmodule1');
  }

}
