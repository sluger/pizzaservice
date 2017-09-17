import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncredientsPipe } from './incredients.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    IncredientsPipe,
  ],
  exports: [
    IncredientsPipe,
  ]
})
export class PipesModule { }
