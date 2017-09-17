import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzaComponent } from './pizza/pizza.component';
import { OrdersComponent } from './orders/orders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const appRoutes: Routes = [
    { path: 'pizzas', component: PizzasComponent },
    { path: 'pizzas/:id', component: PizzaComponent },
    { path: 'cart', component: ShoppingCartComponent },
    { path: 'orders', component: OrdersComponent },
    { path: '', redirectTo: '/pizzas', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // debug routing
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }