/**
 * !Essa criação de proxy é para evitar um erro chamado "CORS"
 * *Tal medida de segurança impede que requisições sejam feitas entre dois
 * *domínios diferentes, nesse caso seria o localhost, mas como as aplicações
 * *estão em portas diferentes (uma na 8080 e outra na 4200) é considerado
 * *como se fossem domínios distintos.
 */
const PROXY_CONFIG = [
  {
    context: ['/api/v1'],
    target: 'http://localhost:8080/',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
