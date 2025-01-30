Ver mais um projeto de CRUD com node e MySQL e comparar com esse projeto

Após o término das duas, estudar as dependências, métodos e funções (um por um)

Entendendo o que cada técnologia faz, montar o meu próprio projeto de CRUD

"dependencies": {
    "body-parse": "^0.1.0",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "mysql2": "^3.12.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  }

*Tem alguma forma de exportar as dependências do projeto sem precisar copiar e colar ou enviar o arquivo package.json*

## LÓGICA

O primeiro arquivo a ser executado é o server.js

Ele faz ligação com o arquivo de rotas, mas quem é executado é ele

routes.js contém as rotas e o que o servidor entrega em cada uma delas

E pra isso ele precisa enxergar o arquivo controllers, onde estão essas funções

O servidor usa as funções de lá. Nelas o conteúdo das queries é entregue como json, mas as mesmas chamam as funções do arquivo services.js (depois do await)

É no arquivo services onde, por exemplo, as queries do banco de dados estão

Importante notar que tudo isso poderia estar em um único arquivo. Mas a abstração vem pra facilitar o nosso trabalho

## FUNÇÕES
Ao estudar as funções, eu preciso
- entender a funcionalidade específica dela no código e o que acontece se o código não ter ele
- quais são os parâmetros que a função recebe, o que cada parâmetro faz

O node é muito funcional. O código funciona a base de chamadas de funções e dando os valores dentro dos prâmetros. É como se fossem várias camadas de funções, uma executada encima da outra

Se não tomar cuidado você esquece até em qual função está