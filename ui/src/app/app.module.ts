import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PizzasModule } from './pizzas/pizzas.module';
import { ExtrasModule } from './extras/extras.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PizzasModule,
    ExtrasModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
