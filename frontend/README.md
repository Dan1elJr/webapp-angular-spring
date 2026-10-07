# Todo Frontend

Aplicacao frontend em Angular para gerenciamento de tarefas. O app possui login, rotas protegidas, tela de boas-vindas e fluxo de listagem, criacao, edicao e exclusao de todos consumindo uma API REST.

## Tecnologias

- Angular 22
- TypeScript 6
- RxJS
- Bootstrap 4
- Vitest
- npm

## Funcionalidades

- Login com Basic Authentication
- Protecao de rotas com `RouteGuard`
- Listagem de tarefas
- Cadastro de nova tarefa
- Edicao de tarefa existente
- Exclusao de tarefa
- Tela de logout
- Consumo de backend REST em `http://<host>:8080/api`

## Pre-requisitos

- Node.js compativel com a versao definida em `.node-version`
- npm
- Angular CLI, se quiser usar o comando `ng` diretamente
- Backend da aplicacao rodando na porta `8080`

## Instalacao

Instale as dependencias:

```bash
npm install
```

## Executando em desenvolvimento

Inicie o servidor local:

```bash
npm start
```

O script executa:

```bash
ng serve --host 0.0.0.0
```

A aplicacao ficara disponivel em:

```text
http://localhost:4200
```

## Backend esperado

O frontend espera encontrar a API em:

```text
http://<hostname>:8080/api
```

Principais endpoints consumidos:

```text
GET    /api/basicauth
GET    /api/users/{username}/todos
GET    /api/users/{username}/todos/{id}
POST   /api/users/{username}/todos
PUT    /api/users/{username}/todos/{id}
DELETE /api/users/{username}/todos/{id}
```

Durante o desenvolvimento atual, alguns fluxos usam o usuario `sandaniel` como valor fixo nos servicos de todos.

## Rotas da aplicacao

| Rota | Descricao | Protegida |
| --- | --- | --- |
| `/` | Login | Nao |
| `/login` | Login | Nao |
| `/welcome/:name` | Boas-vindas do usuario | Sim |
| `/todos` | Lista de tarefas | Sim |
| `/todos/:id` | Criacao ou edicao de tarefa | Sim |
| `/logout` | Logout | Sim |
| `/**` | Pagina de erro | Nao |

## Scripts disponiveis

```bash
npm start
```

Executa a aplicacao em modo desenvolvimento.

```bash
npm run build
```

Gera a versao de producao em `dist/`.

```bash
npm run watch
```

Executa o build em modo observacao para desenvolvimento.

```bash
npm test
```

Executa os testes unitarios.

## Build de producao

Para gerar os arquivos finais:

```bash
npm run build
```

Os artefatos serao criados no diretorio:

```text
dist/
```

O projeto tambem possui um `nginx.conf.template`, que pode ser usado como base para servir a aplicacao em ambiente de container ou servidor web.

## Estrutura principal

```text
src/
  app/
    login/          Tela de login
    welcome/        Tela de boas-vindas
    list-todos/     Lista de tarefas
    todo/           Criacao e edicao de tarefas
    logout/         Tela de logout
    error/          Tela de erro
    menu/           Menu da aplicacao
    footer/         Rodape
    service/        Guards, autenticacao, interceptadores e servicos HTTP
```

## Observacoes

- O token Basic Auth e o usuario autenticado sao armazenados em `sessionStorage`.
- A API precisa permitir CORS para a origem do frontend.
- O interceptor de Basic Auth existe no projeto, mas atualmente esta comentado em `app.config.ts`.
