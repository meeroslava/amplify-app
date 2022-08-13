import { Amplify } from '@aws-amplify/core';
import { DataStore } from '@aws-amplify/datastore';
import awsconfig from '../aws-exports.js';

Amplify.configure(awsconfig);

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  async ngOnInit(): Promise<void> {
    await DataStore.start();
  }
}
