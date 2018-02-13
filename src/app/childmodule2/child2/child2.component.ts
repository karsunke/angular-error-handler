import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html'
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    throw new Error('error from childmodule2');
  }

}
