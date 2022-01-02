import { ServiceAccount } from 'firebase-admin';

// https://stackoverflow.com/questions/41287108/deploying-firebase-app-with-service-account-to-heroku-environment-variables-wit
export const serviceAccount = {
  type: process.env.FIREBASE_CERT_TYPE,
  project_id: process.env.FIREBASE_CERT_PROJECT_ID,
  private_key_id: process.env.FIREBASE_CERT_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_CERT_PRIVATE_KEY, //?.replace(/\\n/g,'\n',),
  client_email: process.env.FIREBASE_CERT_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CERT_CLIENT_ID,
  auth_uri: process.env.FIREBASE_CERT_AUTH_URI,
  token_uri: process.env.FIREBASE_CERT_TOKEN_URI,
  auth_provider_x509_cert_url:
    process.env.FIREBASE_CERT_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url:
    process.env.FIREBASE_CERT_CLIENT_X509_CERT_URL,
} as ServiceAccount;
