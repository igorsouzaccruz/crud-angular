import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErroDialogComponent } from 'src/app/shared/components/erro-dialog/erro-dialog.component';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent {

  courses$:Observable<Course[]>;
  displayedColumns = ['name','category'];

  // coursesService:CoursesService;

  constructor(
    private coursesService:CoursesService,
    public dialog: MatDialog
    ) {

    this.courses$ = this.coursesService.list()
    .pipe(
      catchError(error => {
        this.onError("Erro ao carregar cursos")
        return of([])
      })
    );
  }

  onError(errorMsg:string) {
    this.dialog.open(ErroDialogComponent, {
      data: errorMsg
    });
  }
}
