import { CoursesService } from './../services/courses.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  constructor( private router: Router,
    private route: ActivatedRoute,
    private service: CoursesService) { }

  ngOnInit(): void {
  }

  @Input() courses: Course[] = [];
  //'readonly' é o 'final' do typescript
  readonly displayedColumns = ["name", "category", "actions"];

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route}); //!IMPORTANTE
  }

  onDelete(id: string){
    this.service.delete(id).subscribe(() => console.log("fodas"));
  }

  onUpdate(id: string){
    this.router.navigate([`update/${id}`], {relativeTo: this.route}); //!IMPORTANTE
  }
}
