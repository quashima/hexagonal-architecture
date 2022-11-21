## Description

Hexagonal Architecture with NestJS(TypeScript)

## Installation

```zsh
$ yarn install
```
## Database setup
Add the `DATABASE_URL` of the `.env` file.
ex. `postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA`

Map data model to the database schema.
```zsh
$ npx prisma migrate dev --name init
```

## Running the app

```zsh
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```zsh
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
