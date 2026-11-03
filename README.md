# Biomas Brasileiros

Aplicativo informativo desenvolvido com **React Native** e **Expo**. O projeto apresenta curiosidades e características de três biomas brasileiros em telas que podem ser acessadas pelas abas na parte inferior do app.

## Conteúdo

- **Amazônia:** rios, cheias e biodiversidade.
- **Cerrado:** adaptações à estação seca, nascentes e variedade de paisagens.
- **Mata Atlântica:** espécies, ocupação do litoral e conservação.

As telas são compostas por textos e imagens. O app não possui campos para entrada de dados.

## Navegação e recursos

A navegação usa o **React Navigation Bottom Tabs**. Cada aba abre uma tela informativa independente. As imagens dos biomas estão na pasta `assets/` e são ajustadas para preencher os cartões sem distorção.

## Organização do projeto

```text
appInformativo/
├── App.js
├── app.json
├── index.js
├── package.json
├── assets/
│   ├── amazonia.jpg
│   ├── cerrado.webp
│   └── mataAtalntica.jpg
└── fonte/
    ├── CartaoInfo.js
    ├── TelaAmazonia.js
    ├── TelaCerrado.js
    ├── TelaMataAtlantica.js
    ├── Ilustracoes.js
    └── imagens/
        ├── amazonia.svg
        ├── cerrado.svg
        └── mata-atlantica.svg
```

`App.js` configura o navegador e associa cada aba ao seu componente. Os componentes das telas e o cartão reutilizável ficam em `fonte/`. As fotos atualmente exibidas pelas telas ficam em `assets/`; os SVGs em `fonte/imagens/` são ilustrações vetoriais do projeto.

## Como executar

Requisitos: Node.js e npm instalados.

1. Abra o terminal na pasta `appInformativo`.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o Expo:

   ```bash
   npm start
   ```

Para abrir diretamente no navegador:

```bash
npm run web
```

## Tecnologias principais

- Expo e React Native
- React Navigation Bottom Tabs
- `react-native-screens` e `react-native-safe-area-context`
- `react-native-gesture-handler`, `react-native-reanimated` e `react-native-worklets`
- `react-native-svg` para ilustrações vetoriais

## Autor

**Ariel dos Reis Marinho**
