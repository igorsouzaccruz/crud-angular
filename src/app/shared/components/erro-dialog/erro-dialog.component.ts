import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-erro-dialog',
    templateUrl: './erro-dialog.component.html',
    styleUrls: ['./erro-dialog.component.scss'],
    standalone: true,
    imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatButton, MatDialogClose]
})
export class ErroDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

}
