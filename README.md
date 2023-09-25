# Allu. Website

Uma aplicação fullStack desenvolvida com node.js, Next.js, React, Express e TypeScript com o padrão de microsserviços para gerar um website focado em produtos por assinatura

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```bash
# ter o repositório clonado em sua máquina
  git clone git@github.com:guiduzera/Allu.FullStack-website.git
```

### * Atenção: Preferível abrir o repositório pelo git BASH, máquina com WSL ou nativa Linux

### 🔧 Instalação

### Após o clone do prójeto, na raíz do diretório digite o seguinte comando

```bash
    npm run compose:up # caso ocorra algum erro nos serviços aconselho rodar npm run compose:down e repetir o processo!
```

### Esse comando levantará o docker-compose e todos os containers necessários para rodar a aplicação em sua respectivas portas

### Então acesse:

* [frontend - localhost:3000](http://localhost:3000) - front da aplicação
* [serviço api - localhost:3001](http://localhost:3001) - serviço que compreende produtos e pedidos
* [serviço security - localhost:3002](http://localhost:3002) - serviço que compreende o fluxo de segurança e autenticação
* [database - localhost:3003](http://localhost:3003) - database que agrupa os produtos e pedidos
* [databasesecurity - localhost:3004](http://localhost:3004) - database que agrupa os usuários

Caso queria derrubar os conteiners basta digitar o seguinte comando na raíz do projeto:

```bash
    npm run compose:down
```

## ⚙️ Executando os testes

Explicar como executar os testes automatizados para este sistema.

### 🔩 Analise os testes de ponta a ponta

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

### ⌨️ E testes de estilo de codificação

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

## 🛠️ Construído com

* [Next.js e React](https://nextjs.org/) - O framework web front-end usado
* [styled-components](https://styled-components.com/) - Framework de CSS
* [TypeScript](https://www.typescriptlang.org/pt/) - Linguagem de programação
* [Express](https://expressjs.com/pt-br/) - Framework back-end utilizado
* [MySQL](https://www.mysql.com/) - Banco de dados relacional usado
* [Prisma](https://www.prisma.io/) - ORM utilizado
* [Docker](https://www.docker.com/) - Containerizador
* [Jest](https://jestjs.io/pt-BR/) - Testes unitários
* [Eslint](https://eslint.org/) - Garantir padrões de código
* [Swagger](https://swagger.io/) - Documentação das API's

## 📌 Versão

1.0.0

## ✒️ Autores

* **Guilherme Carvalho** - *Trabalho Inicial* - [Github](https://github.com/guiduzera)

## 🎁 Expressões de gratidão

* Convide o autor para tomar uma cerveja 🍺;
* Um agradecimento publicamente à Thiago Silva;

---
⌨️ com ❤️ por [Guilherme Carvalho](https://github.com/guiduzera) 😊

---
# Detalhes Backend

* Logo a baixo segue um diagrama de classes que fiz para me inspirar a estruturar a aplicação

```mermaid
classDiagram
  class Produto {
    - produto_id : int
    - nome : string
    - descricao : string
    - foto : string
    - preco : decimal
  }

  class Usuario {
    - usuario_id : int
    - nome : string
    - email : string
    - senha : string
  }

  class PedidoDeAssinatura {
    - pedido_id : int
    - usuario_id : int
    - data_pedido : date
    - status : string
    - documento_identificacao : string
    - produto_id : int
    - quantidade : int
  }

  Produto "1" -- "many" PedidoDeAssinatura : Contém
  Usuario "1" -- "many" PedidoDeAssinatura : Realiza
```

# Documentação

 ## O backend é dividio em dois serviços, dessa forma cada um tem sua documentação separadas em portas diferentes utilizando swagger

 * [documentação - serviço api ](http://localhost:3001/api-docs/)
 * [documentação - serviço security](http://localhost:3002/api-docs/)
* é necessário o Docker estar com o compose up!!

## Acessando essas urls é possível visualizar todas as rotas, métodos de requisição necessários, padrões de resposta e até mesmo o usuário pode testar as rotas requisitando direto do UI apresentado

### Lembrete | Dica: Todas rotas do serviço de api são protegidas e precisam de um token válido em seus cabeçalhos para serem acessadas

#### Assim recomendo que antes de testar essa rotas pelo swagger realizem login ou registro no serviço de security, e guardem o token para autorizar no swagger

---

# Detalhes frontend

## O Front é feito com o framework Next.js enão todo o core e paginação se encontra na pasta pages dentro de src

## Todos os componentes se encontram na pasta components que seguem o seguinte padrão:
  * Nome da pasta é o nome do componente
  * dentro da pasta terá obrigatóriamente um index.tsx e um styles.ts
  * o index abrigará a estrutura toda e o styles.ts guardará os componentes estilizados do styled-components
  * váriaveis úteis a todos os componentes se encontram na pasta environments