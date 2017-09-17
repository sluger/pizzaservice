import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtrasComponent } from './extras.component';
import { HttpModule } from '@angular/http';
import { ExtrasService } from './extras.service';

@NgModule({
  declarations: [
    ExtrasComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
  ],
  providers: [
    ExtrasService,
  ],
  exports: [
    ExtrasComponent,
  ]
})
export class ExtrasModule { }
