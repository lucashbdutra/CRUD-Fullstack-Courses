import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {

  //* O "FormBuilder" ao que tudo indica é usado para geração de formulários.
  //Aqui dentro de group vamos colocar qual vão ser as propriedades desse formulário.
  form = this.formBuilder.group({
    name: [''],
    category: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackbar: MatSnackBar,
    private location: Location
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (result) => this.onSucess(),
      (error) => this.onError()
    );
    this.onCancel(); //Aqui usamos o "onCancel" para que quando o curso for criado com sucesso volte automaticamente para a lista.
  }

  onCancel() {
    this.location.back();
    /**
     * *Aqui temos uma outra forma de redirecionamento usando a classe "Location",
     * *Com ela podemos fazer operações como ir para a próxima página ou voltar para
     * *a página anterior, entre outras funções menos utilizadas.
     */
  }

  private onSucess() {
    this.snackbar.open('Curso salvo com sucesso', '', { duration: 5000 });
  }

  private onError() {
    this.snackbar.open('Erro ao salvar curso.', '', { duration: 5000 });
  }
}
