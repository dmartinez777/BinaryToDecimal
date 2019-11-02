import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {PipesModule} from '../pipes/pipes.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PipesModule, FormsModule, ReactiveFormsModule],
  exports: [HomeComponent]
})

export class PagesModule { }
