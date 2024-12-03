# Design Patterns

- Alunos: ***Emerson Okopnik e Murilo Costa Bittencourt***
## Descrição
- Projeto desenvolvido para atividade na materia de *"Linguagem de Programação e Paradigmas"*
- foi utilizado o framework React para o frontend e a biblioteca de componentes *PrimeReact*

## Observações
- As principais classes são `src/components/factory/FormasGeometricasFactory.ts` e `src/components/singleton/CreateUsers.ts`
- Para criação do Factory foi criado uma interface padrao para as formas geometricas e apartir de um enum eu consigo criar a forma geometrica desejada e retorno informações e o SVG
- Para criação do Singleton foi criado uma classe para criar usuarios e salva na localstorage, foi deixado um console.log para provar que foi criado apenas uma instancia do objeto

## Como usar
- Requisitos:
    - Node: v20.17.0

- Inicializando o projeto:
    - Clone o repositório e execute linha a linha:
    ```bash	
    > git clone {url}
    > cd design-patterns-react
    > npm install
    > npm start
    ```
