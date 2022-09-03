import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: 'courses'}, //!Aqui estou redirecionando para o routing do "courses"
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  }
];
/**
 * * O "pathMatch: 'full'" verifica se realmente não tem nada naquele endpoint antes de redirecionar.
 */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
