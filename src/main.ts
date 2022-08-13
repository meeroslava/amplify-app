import awsconfig from './aws-exports';
import API from '@aws-amplify/api';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Amplify, PubSub, DataStore } from 'aws-amplify';

API.configure(awsconfig);
PubSub.configure(awsconfig);
Amplify.configure(awsconfig);
DataStore.configure(awsconfig);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
