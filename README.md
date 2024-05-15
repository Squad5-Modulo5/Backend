# Documentação API
-principais rotas

## Configuração Inicial

Crie um arquivo `.env` na raiz do projeto (fora da pasta src) para as variáveis de ambiente:

```env
JWT_PASS=ihljçjpi
ADMIN_PROMOTION_SECRET=abacadabra?A
```


## Rotas

### Cadastrar Usuário

**URL:**

- Deploy: [https://ecoelektbackend.onrender.com](https://ecoelektbackend.onrender.com/user/register)
- Local: `http://localhost:4979/user/register`

**Método:** `POST`

**Body (JSON):**

```json
{
    "name": "Squa5",
    "email": "Squad50@gmail.com",
    "password": "1234567Ae"
}
```


-Resposta:
````json
{
    "message": "Usuário(a) criado(a) com sucesso!",
    "newUser": {
        "id": "b64d9e0b-29a4-463e-98e2-e7489336476e",
        "role": "user",
        "name": "Squa5",
        "email": "squad50@gmail.com",
        "updatedAt": "2024-05-14T21:19:11.774Z",
        "createdAt": "2024-05-14T21:19:11.774Z"
    }
}
````
Login de Usuário
-URL: {{ _.basURL }}/user/login
-Método: POST
-Body (JSON):
```json
{
    "email": "Squad50@gmail.com",
    "password": "1234567Ae"
}
```
Resposta:
````json
{
    "message": "Login efetuado com sucesso!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI2NGQ5ZTBiLTI5YTQtNDYzZS05OGUyLWU3NDg5MzM2NDc2ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxNTcyMTY2MCwiZXhwIjoxNzE1ODA4MDYwfQ.U2iH5bE-lwngmQ5YcX7EcJSEhucjJ2FxmS0JHUe_q5g"
}
````
## Usando o Token
-Para utilizar o token em outras rotas  que pertecem ao user(exceto a rota de registro), configure o Postman da seguinte forma:
-Vá até a aba "Authorization".
-Escolha o tipo "Bearer Token".
-Cole o token no campo fornecido.
Promover Usuário a Administrador
URL: {{ _.basURL }}/user/promote/:id
-Método: PUT
-Body (JSON):
```json
{
    "role": "admin",
    "password": "abacadabra?A"
}
```
Resposta:

json
{
    "message": "Admin adicionado com sucesso!"
}

Criar Produto

URL: {{ _.basURL }}/products/creatproducts/:id_User
-Método: POST
-Body (JSON):
```json
{"product_name":"maquinadelavaresecar", 
"category":"eletrico"}
```
Criar Consumo
URL: {{ _.basURL }}/consumpition/createconsumpition/2aed4919-014f-4d19-a08d-2117c31ec21d
-Método: POST
-Body (JSON):
```json
{
  "Measurement": "kw/h",
  "power": 20,
  "duration": 41,
  "days": 30
}
```

Lembre-se de substituir {{ _.basURL }} pela URL correta do seu ambiente (deploy ou local).
