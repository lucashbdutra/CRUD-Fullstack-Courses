/**
 * Interfaces no typescript não são usadas na transcrição pra javascript quando o navegado ler o código,
 * é usado apenas em tempo de desenvolvimento para auxiliar o programador.
 */
export interface Course {
  _id: string;
  name: string;
  category: string;
}
