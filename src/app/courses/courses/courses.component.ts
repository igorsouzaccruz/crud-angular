import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';


const courses:Course[] = [
  {_id: '1', name:'Angular', category:'front-end'},
  {_id: '2', name:'Teste ', category:'front-end'},
];

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent {

  displayedColumns:string[] = ['name','category'];
  courses = courses;

}
