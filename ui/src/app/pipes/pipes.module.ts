import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncredientsPipe } from './incredients.pipe';
import { ExtraNamePipe } from './extra-name.pipe';
import { ExtrasNamesPipe } from './extras-names.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    IncredientsPipe,
    ExtraNamePipe,
    ExtrasNamesPipe,
  ],
  exports: [
    IncredientsPipe,
    ExtraNamePipe,
    ExtrasNamesPipe,
  ]
})
export class PipesModule { }
