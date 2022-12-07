import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErroDialogComponent } from './components/erro-dialog/erro-dialog.component';



@NgModule({
  declarations: [
    ErroDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErroDialogComponent
  ]
})
export class SharedModule { }
