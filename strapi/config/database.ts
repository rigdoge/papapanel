import path from 'path';

export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'papapanel'),
      user: env('DATABASE_USERNAME', 'doge'),
      password: env('DATABASE_PASSWORD', 'doge.2010'),
      ssl: env.bool('DATABASE_SSL', false)
    }
  }
});
