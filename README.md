#NopdePop

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

Advertisement list:

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


Se pueden aplicar filtros, búsquedas de campos en concreto, paginación y ordenar(por nombre, precio...)