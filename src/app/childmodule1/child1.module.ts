import {ErrorHandler, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1/child1.component';
import {RouterModule} from '@angular/router';
import {Child1ErrorHandler} from './child1.error-handler';
import { RootErrorHandler } from '../root-error.handler';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: Child1Component}])
  ],
  declarations: [Child1Component]
})
export class Child1Module { }
