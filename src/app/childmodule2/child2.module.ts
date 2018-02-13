import {ErrorHandler, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Component } from './child2/child2.component';
import {RouterModule} from '@angular/router';
import {RootErrorHandler} from '../root.error-handler';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: Child2Component}])
  ],
  declarations: [Child2Component],
  providers: [
    {
      provide: ErrorHandler, useClass: RootErrorHandler
    }
  ],
})
export class Child2Module { }
