import { Component, OnInit } from '@angular/core';
import { DataStore, Predicates } from 'aws-amplify';
import { Hotel } from 'src/models';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  searchInput: string = '';
  hotels?: Hotel[];

  constructor() {}

  async ngOnInit() {
    this.hotels = await DataStore.query(Hotel, Predicates.ALL, {
      page: 0,
      limit: 100,
    });
  }

  async search(input: string) {
    this.hotels = await DataStore.query(Hotel, (q) =>
      q.searchName('contains', this.searchInput.toLowerCase())
    );
    console.log('hotels', this.hotels);
  }
}
