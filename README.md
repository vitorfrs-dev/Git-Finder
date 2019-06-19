# GIT FINDER

Um app construido em React e React Native, o Git Finder tem como objetivo buscar os repositórios de um usuário/organização no github, além disso o app conta com uma a função de salvar repositórios em uma lista de favoritos.

Esse repositório conta com duas versões do app, sendo uma feita em React e a outra em React Native.

## Instruções para a versão web

Primeiramente instale as dependências da aplicação rodando o comando `npm install` dentro do diretório **git-finder-web**. Para a aplicação funcionar corretamente é necessário instalar o `json-server`, que pode ser instalado através do comando: `npm install -g json-server`.

Com o json server instalado no diretório raiz desse repositório digite o comando abaixo para iniciar o json-server na porta 3001:

`json-server --watch api.json --port 3001`

Agora dentro do diretório git-finder-web inicie a aplicação com o comando `npm start`.

## Instruções para o app

Instale as dependências da aplicação rodando o comando `npm-install` dentro do diretório GitFinderApp.

### Configurando o ambiente
Para rodar o app é necessário ter um ambiente de desenvolvimento preparado, acesse  a [documentação](https://facebook.github.io/react-native/docs/getting-started) do react-native para configurar um ambiente para android ou para ios.

### Rodando o app

Com o ambiente configurado execute o comando `react-native run-android`(run-ios para instalar no IOS) e o app será instalado no simulador ou em um dispositivo. Não é necessário inciar a API, o app está conectado a uma API online no firebase. 
