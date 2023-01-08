# NopdePop

Deploy:

```sh
npm install
```

Start application:

```sh
npm start
```

Start application in developer mode:

```sh
npm run dev
```

Load initial data to the database
```sh
npm run init-db
```

## Api Documentation

Basic Authentication to access the api

```sh
adminUser: KeepCoding
password: Bootcamp
```

### Advertisement list:

GET /api/anuncios
```sh
{ 
    "nombre": "Iphone 7",
    "venta": true,
    "precio": 120,
    "foto": "././images/Iphone7.png",
    "tags": ["tech", "lifestyle", "electronica"]
}
```
### Used tags list:

GET /api/anuncios/tags

```sh
{"Tags":["tech","lifestyle","electronica","hogar","musica"]}
```

### Filters, pagination and sort

GET /api/anuncios?

```sh
Filters:
http://localhost:3000/api/anuncios?nombre=guit
http://localhost:3000/api/anuncios?venta=false
http://localhost:3000/api/anuncios?precio=100
http://localhost:3000/api/anuncios?tags=hogar

Pagination:
http://localhost:3000/api/anuncios?skip=0&limit=2

Sort:
http://localhost:3000/api/anuncios?sort=precio

All together:
http://localhost:3000/api/anuncios?tags=mobile&venta=false&nombre=ip&precio=50&start=0&limit=2&sort=precio
```