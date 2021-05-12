# readme

Um cartão de loteria uMov.me


## Tecnologias

- Node 14.16
- Vue.js 3.0
- Materialize CSS 1.0
- Vue router 4.0
- Vuex 4.0
- Jest 4.5

## requirements

- docker ^19.*
- docker-compose ^1.25.5.

## Conectividade
- Container vue-lottery-card - Porta 8081(default)

## Iniciando a Aplicação
1. Para build do container docker: Rodar o comando `./start.sh` ou `docker-compose -f docker/docker-compose.yml up -d --build`

2. Rodar testes unitários: `yarn test:unit`
## Enjoy
- Webserver: http://localhost:8081/
- Production Netlify: https://vue-lottery-card.netlify.app/
- Acesso ao bash do container: `docker exec -it vue-lottery-card sh`

