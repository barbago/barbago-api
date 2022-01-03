import {
  Connection,
  ConnectionOptions,
  createConnection,
  getConnection,
} from 'typeorm';

import { config, environment } from './';

const { host, port, name, username, password, prod_host } = config;

export const dbConfig: ConnectionOptions = {
  type: 'mysql',
  host: host,
  port: parseInt(port ?? '3306'),
  database: name,
  username: username,
  password: password,
  synchronize: true,
  logging: true,
  // Todo: entities must be included
  // https://typeorm.io/#/entities
  // entities: ['lib/api/**/*.entity.js'],

  ...(environment.isProd && {
    host: prod_host,
    logging: false,
    synchronize: false,
  }),
};

// https://fireship.io/lessons/sql-firebase-typeorm/
export const connect = async () => {
  let connection: Connection;

  try {
    connection = getConnection();
  } catch (err) {
    connection = await createConnection(dbConfig);
  }

  return connection;
};
