import { CourseFormUpdateComponent } from './course-form-update/course-form-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {path: "", component: CoursesComponent},
  {path: "new", component: CourseFormComponent},
  {path: "update/:id", component: CourseFormUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
