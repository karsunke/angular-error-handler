import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';


import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import { RootErrorHandler } from './root-error.handler';
import { Child1ErrorHandler } from './childmodule1/child1.error-handler';
import { Child2ErrorHandler } from './childmodule2/child2.error-handler';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'child1', loadChildren: 'app/childmodule1/child1.module#Child1Module'},
      {path: 'child2', loadChildren: 'app/childmodule2/child2.module#Child2Module'}
    ])
  ],
  bootstrap: [AppComponent],
  providers: [
    Child1ErrorHandler,
    Child2ErrorHandler,
    { provide: ErrorHandler, useClass: RootErrorHandler }
  ]
})
export class AppModule {
}
