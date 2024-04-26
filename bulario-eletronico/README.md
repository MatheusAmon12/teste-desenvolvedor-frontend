# Bulário Eletrônico

## Setup inicial

- [NodeJS LTS](https://nodejs.org/dist/v20.12.2/node-v20.12.2-x64.msi)
- [json-server v0.17.4](https://www.npmjs.com/package/json-server/v/0.17.4)

## Como rodar na minha máquina?

- Clone o repositório [https://github.com/MatheusAmon12/teste-desenvolvedor-frontend.git](https://github.com/MatheusAmon12/teste-desenvolvedor-frontend.git)
- Rode `npm install` ou `npm i`
- Instale a versão mencionada do [json-server v0.17.4](https://www.npmjs.com/package/json-server/v/0.17.4)
- Rode `json-server api/dotlib.json -s ./api/public --port 3333`
- Rode `npm start`
- Finalizado!
- O seu `package.json` deve parecer com isto:
    - ```json
        "dependencies": {
            "@emotion/cache": "^11.11.0",
            "@emotion/react": "^11.11.4",
            "@emotion/styled": "^11.11.5",
            "@mui/icons-material": "^5.15.15",
            "@mui/material": "^5.15.15",
            "@testing-library/jest-dom": "^5.17.0",
            "@testing-library/react": "^13.4.0",
            "@testing-library/user-event": "^13.5.0",
            "axios": "^1.6.8",
            "react": "^18.2.0",
            "react-dom": "^18.2.0",
            "react-scripts": "5.0.1",
            "tss-react": "^4.9.6",
            "web-vitals": "^2.1.4"
        },
      ```
## Estrutura do projeto

- Acesse o diretório `./bulario-eletronico`
    - `/src` contém todas as peças essenciais para execução e bom funcionamento do projeto
    - `/src/components` componentes que compõe a interface
        - `<Cards>` renderiza um card contendo as informações essenciais dos medicamentos: nome, farmácia, data de postagem e a função `onClick`
            - Recebe todas essas informações como props, dessa forma: `<Cards name={string} company={string} published={new Date(date)} onClick={(pdf) => void} />`
            - A função `onCLick()` manuseia o acesso ao arquivo PDF de cada card
        - `<InputRadio />` renderiza um input radio que permite definir a base da pesquisa, remédio ou farmácia
            - Recebe uma função `onChange()` que manuseia o estado do componente
        - `<Search />` renderiza o campo de busca que recebe como prop o `value` da entrada e a função `onChange`
            - `value` estado atual do campo input
            - `onChange` atualiza o estaado componente
    - `/src/templates` define o template/layout padrão utilizado no projeto, tendo como base o [Material UI](https://mui.com/material-ui/)
    - `/src/utils` contém a função utilitária responsável por fazer a requisição com o `axios`
        - `search` valor do campo input que é atualizado a cada digitação do usuário, realizando uma request a cada alteração de estado permitindo que o usuário obtenha os resultados antes de completar a pesquisa completa, colaborando com o caso de não souber o nome completo do medicamento/farmácia, pois filtra de acordo a entrada
        - `inputRadioValue` valor da referência utilizada para se realizar a busca

        ```js
        export const fetchData = async (inputRadioValue, search ) => {
            try {
                const { data } = await axios.get(`http://localhost:3333/data?${inputRadioValue}_like=${search.toUpperCase()}`)
                console.log("request", data)
                return data
            } catch(error){
                throw new Error("Request error: ", error)
            }
        }
        ```
    - `/src/theme.js` arquivo de configuração do tema, vide [Material UI](https://mui.com/material-ui/migration/v5-style-changes/)

## Como me localizar no projeto?

- O `app.js` reúne todos componentes utilizados, renderiza o template padrão do projeto. Onde você encontra as definições dos dados utilizados para gerar a dinamicidade do projeto

### Considerações finais

- É imprescindível utilizar a versão mencionada do [json-server](https://www.npmjs.com/package/json-server/v/0.17.4), pois é a que disponibiliza o uso da query `_like` utilizada para fazer as consultas à API
- Rode o `json-server` na porta `3333` adicionando o comando `--port 3333`. Os endpoints da API estão configuradas para lidar com `http://localhost:3333` para que não haja conflito com a porta em que a aplicação roda `http://localhost:3000`
- O arquivo PDF deve ser servido na mesma porta em que o `json-server` está rodando para que não precise subir mais um servidor. Para alterar a porta da API que contém o PDF acesse o diretório `./api/dotlib.json` e altere em todas as chaves `documents` como mostra o exemplo abaixo:
```json
"documents": [
    {
        "id": "57a35a05-1615-491c-b5ae-48ad770cdd53",
        "expedient": "5064642229",
        "type": "PROFESSIONAL",
        "url": "http://localhost:<altere-aqui>/pdf_sample.pdf"
    },
    {
        "id": "dcc3ecc6-5b62-4236-8dfe-f61f4da93fac",
        "expedient": "5064642229",
        "type": "PATIENT",
        "url": "http://localhost:<altere-aqui>/pdf_sample.pdf"
    }
]
```