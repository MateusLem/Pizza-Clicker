# Pizza-Clicker

* [Sobre](#Sobre)

* [App](#Versões)

* [Components](#Components)
    * [Main](#Main)
    * [TitleObj](#TitleObj)
    * [UpgradeContent](#UpgradeContent)

* [Imports](#Imports)

* [Executando](#Executando)

* [Tecnologias](#Tecnologias)

* [Contatos](#Contatos)
    * [LinkedIn](#LinkedIn)
    * [Email](#Email)

<br><br>

## Sobre
Este é um projeto de um jogo de clicker, onde o objetivo é clicar o máximo de vezes possível em um botão para ganhar pontos e comprar pizzas.

## App
Contém o componente Main.<br>

- <a href="pizza-clicker\app.json">app.json</a>

<a href="pizza-clicker\App.js">Ver código</a>


## Components
### Main
Contém o componente principal do jogo, incluindo as informações dos dados, a imagem do botão e um botão para comprar upgrades.<br>

<a href="pizza-clicker\components\Main.js">Ver código</a>

### TitleObj
Contém o componente que mostra as informações do jogo.

- Pizzas - Número de pedaços de pizza que você comeu
- Gula - Quantidade de pedaços você pode comer de uma vez

<a href="pizza-clicker\components\TitleObj.js">Ver código</a>

### UpgradeContent
Contém o componente que mostra as informações dos upgrades.<br><br>
<a href="pizza-clicker\components\UpgradeContent.js">Ver código</a>

### ClickerImage
Tentativa mal sucedida de fazer um componente para a imagem do botão.<br><br>
<a href="pizza-clicker\components\ClickerImage.js">Ver código</a>

## Imports

- [userReducer](https://react.dev/reference/react/useReducer) - React
- [Text](https://reactnative.dev/docs/text) - ReactNative
- [View](https://reactnative.dev/docs/view) - ReactNative
- [Image](https://reactnative.dev/docs/image) - ReactNative
- [TouchableOpacity](https://reactnative.dev/docs/touchableopacity) - ReactNative
- [StyleSheet](https://reactnative.dev/docs/stylesheet) - ReactNative

## Executando
Siga os seguintes passos para executar o projeto:

### Clonando repositório
```
git clone https://github.com/MateusLem/Pizza-Clicker.git
```
### Instalando dependências
```
npm i
```

Atualize o seu expo, caso necessário

```
npm install expo@latest
```
```
npx expo install --fix
```
```
npm update
```

Caso deseje executar o projeto na web:
```
npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config@^19.0.0
```

### Executando projeto
```
npx expo start
```

Ao iniciar o projeto, um QRcode e um link serão gerados.
Utilize qualquer um dos dois no app [Expo Go](https://expo.dev/client?utm_source=google&utm_medium=cpc&utm_content=performancemax&gclid=CjwKCAjwyNSoBhA9EiwA5aYlb02f86q0jKJ0cvHirJeDzpXetdteDIZr_Hwd8BqIC1DsMT9xAbkejxoC3ssQAvD_BwE) para executar o projeto em seu dispositivo mobile

## Tecnologias 🛠️
Ferramentas utilizadas para este projeto:
- [React](https://react.dev)
- [ReactNative](https://reactnative.dev)
- [Expo](https://www.expo.dev)
- [Expo Go](https://expo.dev/client?utm_source=google&utm_medium=cpc&utm_content=performancemax&gclid=CjwKCAjwyNSoBhA9EiwA5aYlb02f86q0jKJ0cvHirJeDzpXetdteDIZr_Hwd8BqIC1DsMT9xAbkejxoC3ssQAvD_BwE)

## Contatos
Desenvolvido por Mateus Leme

### LinkedIn
* <img alt="LinkedIn" title="linkedIn" src="./icons/contact/linkedin.png" width="20vw" height="20vh"> <a href="https://www.linkedin.com/in/mateus-da-costa-leme-35a5ab235/">Mateus da Costa Leme</a>

### Email
* <img alt="Gmail" title="gmail" src="./icons/contact/gmail.png" width="27vw" height="17vh"> mateusdacostaleme@gmail.com
