import { Component, OnInit } from '@angular/core';
import { Hotel, Room } from 'src/models';
import { DataStore } from '@aws-amplify/datastore';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.scss'],
})
export class NewRoomComponent implements OnInit {
  room: { type: string; amount: string } = {
    type: '',
    amount: '',
  };
  hotels: Hotel[] = [];

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  snackBarSub?: Subscription;

  constructor(private snackBar: MatSnackBar, private router: Router) {}

  async ngOnInit(): Promise<void> {
    this.hotels = await DataStore.query(Hotel);
  }

  async createRoom(hotel: Hotel) {
    try {
      let amount: number = parseInt(this.room.amount);
      let rooms = await DataStore.query<Room>(Room, (c) =>
        c.type('eq', this.room.type).roomHotelId('eq', hotel.id)
      );

      if (rooms.length > 0) {
        this.openSnackBar('This room type already exists for ' + hotel.name);
      } else {
        await DataStore.save(
          new Room({
            Hotel: hotel,
            type: this.room.type,
            amount: amount,
          })
        );

        this.openSnackBar('Rooms added successfully', true);
      }
    } catch (err) {
      this.openSnackBar('We faced some error to add new rooms');
    }
  }

  openSnackBar(message: string, success?: boolean) {
    let snackBarRef = this.snackBar.open(message, 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });

    this.snackBarSub = snackBarRef.afterDismissed().subscribe((value) => {
      if (value.dismissedByAction && success) {
        this.router.navigate(['./']);
      }
    });
  }

  ngOnDestroy(): void {
    this.snackBarSub?.unsubscribe;
  }
}
