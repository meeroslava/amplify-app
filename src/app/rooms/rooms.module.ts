import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRoomComponent } from './new-room/new-room.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [NewRoomComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatSnackBarModule,
  ],
})
export class RoomsModule {}
