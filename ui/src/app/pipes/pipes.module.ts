import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncredientsPipe } from './incredients.pipe';
import { ExtraNamePipe } from './extra-name.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    IncredientsPipe,
    ExtraNamePipe,
  ],
  exports: [
    IncredientsPipe,
    ExtraNamePipe,
  ]
})
export class PipesModule { }
