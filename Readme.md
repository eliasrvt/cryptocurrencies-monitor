# WChallenge - Cryptocurrencies Monitor

### Pre-requisitos 📋

- NodeJS
- Mysql o Mariadb
- npm

## Comenzando 🚀

1. Clonar el repositorio usando

```
git clone ...
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

5. Ejecutar las migraciones con el siguiente comando

```
npm run migrate
```

6. Ejecutar seeders para crear usuarios de prueba.

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

## Documentación

Una breve explicacion de los endpoints de la Api.

### Login

```
POST /auth/login

Cuerpo del JSON (Body)
{
  'username': 'eliasrava',
  'password': 'elias123123'
}
```

### Registro de Usuario

```
POST /users/register

Cuerpo del JSON (Body)
{
  'name': 'Juan',
  'lastname': 'Perez',
  'username': 'juanper',
  'password': 'password'
}
```

### Listado de cryptomonedas

```
GET /coins

headers: {
    'Authorization': 'Bearer yourWebToken'
}
```

### Agregar cryptomonedas

```
POST /coins

headers: {
    'Authorization': 'Bearer yourWebToken'
}

Cuerpo del JSON (Body)
{
  'coin_external_id': 'bitcoin'
}
```

### Top de cryptomonedas

```
GET /users/top

headers: {
    'Authorization': 'Bearer yourWebToken'
}
params
{
  'limit': n,       // n>=1 && n<= 25
  'order': 'desc', // asc || desc
}

```
