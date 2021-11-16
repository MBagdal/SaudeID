# SAUDEID
Teste de processo seletivo
## Como Usar
Faça o clone deste projeto em seu computador e acesse a pasta do projeto.

ainda no terminal, rode o seguinte comando:
```console
saude@id: npm install
```

após a instalação dos pacotes, execute o seguinte comando:
```console
foo@bar: npm run dev
```

através do postman( ou algum aplicativo de preferencia), acesse as seguintes url:

*Posts do blog: 
  * Listar todos os post: localhost:3000/api/v1/articles/ -> Http Get
  * Filtrar um post pelo id: localhost:3000/api/v1/articles/{id} -> Http Get
  * deletar o post: localhost:3000/api/v1/articles/{id} -> Http Delete
  * Atualizar o post: localhost:3000/api/v1/articles/{id} -> Http Put
  * Criar um post: localhost:3000/api/v1/articles/ -> Http Post

Para criar ou atualizar um post, no body da requisição envie um objeto json como no exemplo a seguir:
```json
{
    "title": string,
    "description": string,
    "categories": string
}
```

## Atenção
Certifique-se que tenha o MongoDb instalado em sua máquina.
## Contribuição
Marco Bagdal

## Licença
[MIT](https://choosealicense.com/licenses/mit/)