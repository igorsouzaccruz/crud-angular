import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErroDialogComponent } from './components/erro-dialog/erro-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';
import { ConfimationDialogComponent } from './components/confimation-dialog/confimation-dialog.component';



@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        ErroDialogComponent,
        CategoryPipe,
        ConfimationDialogComponent
    ],
    exports: [
        ErroDialogComponent,
        ConfimationDialogComponent,
        CategoryPipe
    ]
})
export class SharedModule { }
