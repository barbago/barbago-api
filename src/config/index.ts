import dotenv from 'dotenv';

const isEnv = dotenv.config();

if (!isEnv) throw new Error('Could not find .env file!');

export const env = process.env.NODE_ENV;

export const config = {
  port: parseInt(process.env.PORT ?? '3000'),
};
