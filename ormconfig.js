module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  synchronize: false,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: ['libs/db/src/lib/entity/**/*.ts'],
  migrations: ['libs/db/src/lib/migration/**/*.ts'],
  subscribers: ['libs/db/src/lib/subscriber/**/*.ts'],
  cli: {
    migrationsDir: 'libs/db/src/lib/migration',
  },
};
