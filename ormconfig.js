const envDependentVars = process.env.DATABASE_URL
  ? {
      url: process.env.DATABASE_URL,
      ssl: {
        // DO NOT DO THIS
        // set up your ca correctly to trust the connection
        rejectUnauthorized: false,
      },
    }
  : {
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      host: 'localhost',
      port: 5432,
    };
module.exports = {
  type: 'postgres',
  synchronize: false,
  entities: ['libs/db/src/lib/entity/**/*.ts'],
  migrations: ['libs/db/src/lib/migration/**/*.ts'],
  subscribers: ['libs/db/src/lib/subscriber/**/*.ts'],
  cli: {
    migrationsDir: 'libs/db/src/lib/migration',
  },
  ...envDependentVars,
};
