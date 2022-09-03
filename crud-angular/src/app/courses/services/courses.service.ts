import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //! Isso significa que essa instancia está disponível para ser injetada para todos os arquivos na raiz do projeto.
})
export class CoursesService {

  //* Aqui eu coloco eu não preciso colocar o caminho completo, pois ele ja está presente no proxy.
  private readonly API = 'api/v1/courses';
  //! 'readonly' parece que é o equivalente ao 'final' do java.

  constructor(private httpClient: HttpClient) { }
  /**
   * ! O 'HttpClient' é a classe usada para fazer as requisições http.
   * * Através dessa declaração no construtor o angular faz automaticamente a injeção da dependência.
   * * Porém para que essa instancia funcione corretamente, é necessário importar o "HttpClientModule" diretamente no
   * * "app.module.ts" para que esse módulo fique disponível para toda a aplicação.
   */

  list(){
    return this.httpClient.get<Course[]>(this.API);
    // .pipe( //* 'pipe' permite que eu faça modificações de maneira reativa.
    //   tap(courses => console.log(courses))
    // );
  }

  /**
   * ! Os 'GET' da mesma forma que no java eles retornam 'Optionals', aqui eles retornam 'Observables'.
   * * Um ".subscribe" ao final da sentença teria o mesmo efeito de um ".get()" no java para pegar o valor do objeto.
   */

  save(course: Partial<Course>){

    return this.httpClient.post<Course>(this.API, course);

  }
  /**
   * !Esses são os parâmentros necessários para um método post, basta ter o endpoint
   * !e o que será enviado, o "body" da requisição.
   */

  delete(id: string){
    return this.httpClient.delete<Course>(`${this.API}/${id}`);
  }

  update(course: Partial<Course>, id: string){
    return this.httpClient.put<Course>(`${this.API}/${id}`, course);
  }
}
