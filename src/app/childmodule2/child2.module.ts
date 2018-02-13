import {ErrorHandler, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Child2Component} from './child2/child2.component';
import {RouterModule} from '@angular/router';
import {Child2ErrorHandler} from './child2.error-handler';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: Child2Component}])
  ],
  declarations: [Child2Component],
  providers: [
    {
      provide: ErrorHandler, useClass: Child2ErrorHandler
    }
  ],
})
export class Child2Module {
}
