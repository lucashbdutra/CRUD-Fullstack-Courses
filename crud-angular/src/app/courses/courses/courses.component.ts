import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>; //* O símbolo de cifrão ($) ao lado da variável é uma boa prática que indica que ela é um "Observable".

  constructor(private service: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute) { //! ActivatedRoute referencia a rota atual em que aquele componente está.

    this.courses$ = service.list()
    .pipe( //* 'pipe' permite que eu faça modificações de maneira reativa.
      catchError(error => {
        this.onError('Erro ao carregar cursos.');
        return of([]);
      })
    );;
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent,{
      data: errorMsg
    });
  }
  /**
   * *Esse tipo de injeção diretamente nos parâmetros do construtor so é possível quando a classe
   * *possui o '@Injectable'
   */

  ngOnInit(): void {
    /**
     * !O "ngOnInit" é geralmente usado para iniciar uma lógica necessária no componente.
     * !Enquanto o "constructor" é usado no angular principalmente para injeção de denpendências.
     */
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route}); //!IMPORTANTE
  }
  /**
   * *O correto aqui seria usar "/courses/new" que seria a rota completa,
   * *apenas deixar o "new" o angular não consegue entender, pois não existe
   * *a rota "localhost:4200/new", então precisamos definir uma propriedade a mais
   * *para dizer que essa rota "new" é referente a rota atual, ou seja, é para o angular
   * *complementar a rota atual com um "/new" no fim.
   *
   * !Tendo isso em mente, usamos a propriedade "relativeTo: this.route" que faz referencia
   * !A rota atual em que esse componente se encontra.
   */

}
