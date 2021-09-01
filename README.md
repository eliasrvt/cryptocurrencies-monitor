# WChallenge - Cryptocurrencies Monitor

_Cryptocurrencies Monitor es una API desarrollada con Express Framework y provee un servicio de seguimiento de cryptomonedas para cada usuario registrado._

## Pre-requisitos 📋

- NodeJS
- Mysql o Mariadb
- npm

## Instalación 🔧

1. Clonar el repositorio usando

```
git clone https://github.com/eliasrvt/cryptocurrencies-monitor.git
```

2. Instalar dependencias

```
npm install
```

3. Configurar variables de entorno.
   Se dispone de 3 archivos para distintos entornos

- .env.development
- .env.production
- .env.test

```
// .env.development

NODE_ENV=development
HOST=localhost
PORT=3000

#Database
DB_USERNAME=root
DB_PASSWORD=
DB_NAME=cryptocurrencies
DB_HOST=localhost
DB_DIALECT=mysql

#Auth coinfig
AUTH_SECRET=CryptoCurrenci3sM0nit0r
AUTH_EXPIRES=1h
AUTH_ROUNDS=10

#Api CoinGecko
API_BASE_URL=https://api.coingecko.com/api/v3
```

4. Crear una base de datos con el nombre definido en los archivos .env

```
//.env.development
...
DB_NAME=cryptocurrencies
...
```

5. Ejecutar las migraciones con el siguiente comando

```
npm run migrate
```

6. Ejecutar seeders para crear usuarios de prueba. (La clave por defecto para todos los usuario de prueba es _password_)

```
npm run seeder
```

7. Correr el proyecto con

```
// development
npm run dev

// production
npm run prod

// test
npm run test
```

## Documentación 📄

Una breve explicacion de los endpoints de la Api.

### Login

```
POST /auth/login
```

```
Cuerpo del JSON (Body)
{
  'username': 'eliasrava',
  'password': 'elias123123'
}
```

```
Ejemplo de respuesta
{
  "message": "Login success",
  "data": {
      "token": "eyJhbGciOiJ...",
      "user": {
          "name": "Administrator",
          "lastname": "AdminLastname",
          "username": "admin",
          "preferred_money": "USD"
      }
  }
}
```

### Registro de Usuario

```
POST /users/register
```

```
Cuerpo del JSON (Body):
{
  'name': 'Juan',
  'lastname': 'Perez',
  'username': 'juanper',
  'password': 'password',
  "preferred_money": "ARS", // ARS | USD | EUR
}
```

```
Ejemplo de respuesta
{
    "message": "",
    "data": {
        "name": "elias",
        "lastname": "test",
        "username": "admin22",
        "preferred_money": "ARS"
    }
}

```

### Listado de todas cryptomonedas

```
GET /coins
```

```
Headers necesarios
headers: {
    'Authorization': 'Bearer yourWebToken'
}
```

```
Ejemplo de respuesta
{
  "message": "",
  "data": [
      {
          "symbol": "btc",
          "current_price": 47765,
          "name": "Bitcoin",
          "image": "url.image.jpg": "2021-09-01T12:03:25.035Z"
      },
      ...
      ...
  ]
}
```

### Agregar cryptomonedas

```
POST /coins
```

```
headers: {
    'Authorization': 'Bearer yourWebToken'
}
```

```
Cuerpo del JSON (Body)
{
  'coin_external_id': 'bitcoin'
}

Ejemplo de respuesta
{
    "message": "",
    "data": {
        "id": 3,
        "coin_external_id": "eos",
        "user_id": 1,
        "updatedAt": "2021-09-01T12:06:46.471Z",
        "createdAt": "2021-09-01T12:06:46.471Z"
    }
}
```

### Top N de cryptomonedas

```
GET /users/top
```

```
headers: {
    'Authorization': 'Bearer yourWebToken'
}
params
{
  'limit': n,       // n>=1 && n<= 25
  'order': 'desc', // asc || desc
}
```

```
Ejemplo de respuesta
{
  "message": "",
  "data": [
      {
          "symbol": "uni",
          "name": "Uniswap",
          "image": "url.image.jpg",
          "last_updated": "2021-09-01T12:09:55.441Z"
      },
      ...
  ]
}

```

## Testing ⚙️

_Para ejecutar los test usamos MOCHA y para ver los reportes NyC_

```
npm coverage
```
