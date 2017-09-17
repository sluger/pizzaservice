import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzasModule } from './pizzas/pizzas.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PizzasModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
