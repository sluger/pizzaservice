import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzaComponent } from './pizza/pizza.component';
import { OrdersComponent } from './orders/orders.component';

const appRoutes: Routes = [
    { path: 'pizzas', component: PizzasComponent },
    { path: 'pizzas/:id', component: PizzaComponent },
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