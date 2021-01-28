# InGaia - API de retorno do valor

[TOC]

# Features

- API para retornar o valor do metro do imóvel;
- Node.JS.
- Rest API.

# Preparando WorkSpace
Node
> Instalar node versão v14.15.4

NPM
> 6.14.10

Docker
                    
> Realizar instalação Docker

------------

# Inicialização do projeto

> Executar comando npm install

Em seguida inicialize o projeto local
> npm run dev

Para realizar testes
> npm run test

# Rotas　
Health Check:
> / 

 || Method GET
```javascript
{
	"healthCheck": "OK"
}
```
enviar via body payload conforme exemplo abaixo(em json), substituindo valor pelo desejado:
> /v1/value/meters 

|| Method GET
Retorno esperado
```javascript
{
	"value": 500
}
```

# Subindo Docker local
> O projeto possui um Dockerfile em sua raiz, o mesmo contém dois códigos para deploy, o primeiro que já se encontra descomentado é para utilização em ambiente local
O segundo está configurado para realizar em produção após executar o build(deverá ficar comentado até obter um ambiente especifico).

Comandos para inicializar o Docker local (lembrando, você deve estar com o terminal na raiz do projeto onde encontra-se o Dockerfile):
- docker build -t seunome/nome-do-projeto .
- docker run -p 49161:3001 -d seunome/nome-do-projeto
- docker image list 
>No final basta executar localhost:49161

# API Online de testes
>A API encontra-se online para testes, nesse caso foi utilizado a plataforma da VERCEL para o Deploy de testes
- https://vercel.com
- API: https://in-gaia-api-value.vercel.app/v1/value/meters

# Swagger
>A API possui um Swagger em seu código, para acessar basta acessar pelo browser na rota:
- /api-docs

>Esse Swagger funciona tanto localmente quanto no ambiente de deploy
**Atualmente o Layout do Swagger na plataforma da Vercel está com problemas na renderização, a aplicação não conseguiu aplicar o CSS e obter alguns dados de imagens**

