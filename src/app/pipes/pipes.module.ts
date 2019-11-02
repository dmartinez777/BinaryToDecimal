import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bin2decPipe } from './bin2dec/bin2dec.pipe';

@NgModule({
  declarations: [Bin2decPipe],
  imports: [
    CommonModule
  ],
  exports: [
    Bin2decPipe
  ]
})
export class PipesModule { }
