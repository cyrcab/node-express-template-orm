### Template Node Backend + Express + Prisma

It's a template for a backend that will be used with a frontend (like React, Vue, Angular, etc.).
Using this template, you will be able to create a backend with a database (PostgreSQL) and a GraphQL API using Prisma.
MongoDB and SQL are also available.

## Getting Started

First install the dependencies:

```bash
npm install
```

if you have yarn installed:

```bash
yarn
```

You can implement your own database by changing the `datasource` in `prisma/schema.prisma` and then run:

```bash
npx prisma migrate dev --name init
```

then go to https://www.prisma.io/ for more information.

## Development

To start the development server:

```bash
npm run start
```

or if you have yarn installed:

```bash
yarn start
```

if you want to use nodemon:

```bash
npm start:watch
```

or if you have yarn installed:

```bash
yarn start:watch
```

I invite you to read the documentation of the packages used in this template.

Express : https://expressjs.com/
jtw : https://jwt.io/
argon2 : https://www.npmjs.com/package/argon2
cookie-parser : https://www.npmjs.com/package/cookie-parser
cors : https://www.npmjs.com/package/cors
