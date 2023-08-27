
 # Projeto CRUD de Usuarios




## 🚀 Como executar o projeto

Este projeto é divido em duas partes:
 1. [BackEnd](https://github.com/gsantos20/api-redux-users.git)  - [API]()
 2. [FrontEnd](https://github.com/gsantos20/next-redux-users.git) - [Web]()

💡 Tanto o Frontend precisam que o Backend esteja sendo executado para funcionar.


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


### Configurações local

#### 🎲 Rodando o Backend ( API )

Para rodar a API , você vai precisar adicionar as seguintes variáveis de ambiente no seu .env, o modelo esta no arquivo .env.example

`DATABASE_URL` - Url de acesso do banco de dados.

#### Exemplo : `mysql://root:root@localhost:3306/users-db`

`DB_TYPE` - Tipo do banco de dados.

#### Exemplo : `prisma` || `json`


#### Executando a aplicação

#### 👾  Criando banco de dados com Docker

Para rodar a API utlizando docker , é necessario ter o docker e docker compose instalados e configurados em sua maquina

```bash
# Clone este repositório
$ git clone https://github.com/gsantos20/api-redux-users.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd api-redux-users

# Inicie o container em sua maquina
$ docker compose up -d

# A base de dados será aberta na porta:3306
Acesse - http://localhost:3306/

# Credeciais de acesso padrão
User: root
Password: root
```

#### 🎲 Rodando o Backend ( API )

```bash
# Clone este repositório
$ git clone https://github.com/gsantos20/api-redux-users.git

# Acesse a pasta do projeto no terminal/cmd
$ cd api-redux-users

# Instale as dependências
$ npm install

# Instale as dependências do prisma
$ npx migrate dev

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse http://localhost:3000 
```

#### 🧭 Rodando a aplicação web (Frontend)

Para rodar a API , você vai precisar adicionar as seguintes variáveis de ambiente no seu environment.development.ts , o modelo esta no arquivo .env.example

`apiURL` - Url de acesso da sua api

#### Exemplo : http://localhost:3000/api/"

#### Executando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/gsantos20/next-redux-users.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd next-redux-users

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação será aberta na porta:8000 - acesse http://localhost:8000

```


#### ⚙ Build do Projeto


```bash
# No Terminal use os seguintes comandos

npm build

node dist/server.js
```

## 🧾 Conceitos utilizados

- Conceitos de SOLID
- Injeção de Dependência (Dependency Injection)
- Repository Pattern
- Service Pattern
## 🦸 Autor

<div>
 <img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/100292023?s=460&u=61b426b901b8fe02e12019b1fdb67bf0072d4f00&v=4" width="100px;" alt=""/>
   <br />
 <sub><b>Gustavo Santos</b></sub></a> <a href="https://www.linkedin.com/in/gsantos20">🚀</a>
</div>
 <br />

<div>
  <a href="https://instagram.com/guuztta" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
  <a href ="mailto:nerisgs20@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/gsantos20" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
</div>

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

---
