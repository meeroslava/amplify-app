import awsconfig from './aws-exports';
import API from '@aws-amplify/api';
// import { DataStore } from '@aws-amplify/datastore';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Amplify, Logger, PubSub, Hub, DataStore } from 'aws-amplify';
import { Room } from './models';

API.configure(awsconfig);
PubSub.configure(awsconfig);
Amplify.configure(awsconfig);
DataStore.configure(awsconfig);
// Logger.LOG_LEVEL = 'ERROR';
// Logger.LOG_LEVEL = 'DEBUG';

// DataStore.start();
// DataStore.query(Room).then((value) => console.log('HEY', value));
// Hub.listen('datastore', (value) => console.log(value));

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
