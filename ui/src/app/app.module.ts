import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PizzasModule } from './pizzas/pizzas.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PizzaModule } from './pizza/pizza.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PizzasModule,
    PizzaModule,
    OrdersModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
