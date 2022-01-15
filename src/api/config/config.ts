import * as functions from 'firebase-functions';

export const env = functions.config().config;

export const database_config = env.database as {
  [key: string]: string;
};
export const { prod_host, host, port, name, username, password } =
  database_config;
