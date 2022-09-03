import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NonNullableFormBuilder } from '@angular/forms';
import { CoursesService } from './../services/courses.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-form-update',
  templateUrl: './course-form-update.component.html',
  styleUrls: ['./course-form-update.component.scss']
})
export class CourseFormUpdateComponent implements OnInit {

  constructor(
    private location: Location,
    private service: CoursesService,
    private formBuilder: NonNullableFormBuilder,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['id'];
  }

  form = this.formBuilder.group({
    name: [''],
    category: [''],
  });

  courseId: string = '';

  onSave(){
    this.service.update(this.form.value, this.courseId ).subscribe(
      (result) => this.onSucess(),
      (error) => this.onError()
    );
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['']); //!IMPORTANTE
  }

  private onSucess() {
    this.snackbar.open('Curso atualizado com sucesso', '', { duration: 5000 });
  }

  private onError() {
    this.snackbar.open('Erro ao atualizar curso.', '', { duration: 5000 });
  }
}
