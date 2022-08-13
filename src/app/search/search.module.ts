import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page/search-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
  ],
})
export class SearchModule {}
