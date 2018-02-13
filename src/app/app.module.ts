import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {RootErrorHandler} from './root.error-handler';
import {RouterModule} from '@angular/router';
import {Child2Module} from './childmodule2/child2.module';


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
  providers: [
    {
      provide: ErrorHandler, useClass: RootErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
