import * as functions from 'firebase-functions';

export const env = functions.config();
export const { prod_host, host, port, name, username, password } =
  env as { [key: string]: string };
