import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

dotenv.config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;

const config = {
  type: 'mysql',
  host: DB_HOST as string,
  port: Number(DB_PORT),
  username: DB_USERNAME as string,
  password: DB_PASSWORD as string,
  database: DB_DATABASE as string,

  autoLoadEntities: true,

  entities: ['dist/**/*.model.js'],
  migrations: ['dist/database/migrations/*.js'],

  cli: {
    migrationsDir: './src/database/migrations',
  },
} as TypeOrmModuleOptions;

export default config;
