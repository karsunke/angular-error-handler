import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';


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
  bootstrap: [AppComponent]
})
export class AppModule {
}
