import { app } from './app';
import { config } from './config';

import * as admin from 'firebase-admin';
import { serviceAccount } from './config/firebase';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.listen(config.port, () =>
  console.log(`http://localhost:${config.port}`),
);
