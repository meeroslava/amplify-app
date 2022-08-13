import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataStore } from 'aws-amplify';
import { map, Observable, startWith, Subscription } from 'rxjs';
import { Client, Hotel, Reservation, Room } from 'src/models';
import * as moment from 'moment';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.scss'],
})
export class NewReservationComponent implements OnInit {
  minDate: Date;
  myHotelControl = new FormControl('');
  myClientControl = new FormControl('');

  showRoomsList: boolean = false;
  roomsList?: Room[];

  selectedRoom?: Room;

  dates: { checkIn: string; checkOut: string } = { checkIn: '', checkOut: '' };

  hotelOptions: Hotel[] = [];
  clientOptions: Client[] = [];

  filteredClientOptions?: Observable<Client[]>;
  filteredHotelOptions?: Observable<Hotel[]>;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  snackBarSub?: Subscription;

  constructor(private snackBar: MatSnackBar, private router: Router) {
    this.minDate = new Date();
  }

  async ngOnInit(): Promise<void> {
    this.hotelOptions = await DataStore.query(Hotel);
    this.clientOptions = await DataStore.query(Client);

    this.filteredHotelOptions = this.myHotelControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        let name =
          typeof value === 'string' ? value : (value as unknown as Hotel).name;
        return name
          ? this.filterHotels(name as string)
          : this.hotelOptions.slice();
      })
    );

    this.filteredClientOptions = this.myClientControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        let name =
          typeof value === 'string' ? value : (value as unknown as Client).name;
        return name
          ? this.filterClients(name as string)
          : this.clientOptions.slice();
      })
    );
  }

  private filterHotels(name: string): Hotel[] {
    let filterValue = name.toLowerCase();

    return this.hotelOptions.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  private filterClients(name: string): Client[] {
    let filterValue = name.toLowerCase();

    return this.clientOptions.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  async showRooms() {
    let hotelName = this.myHotelControl.getRawValue();
    if (hotelName) {
      let hotel = this.filterHotels(hotelName);
      this.roomsList = await DataStore.query(Room, (c) =>
        c.roomHotelId('eq', hotel[0].id)
      );
      if (this.roomsList) this.showRoomsList = true;
    } else {
      this.openSnackBar('Please choose hotel');
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

  async addReservation() {
    let hotel = this.filterHotels(this.myHotelControl.getRawValue()!);
    let client = this.filterClients(this.myClientControl.getRawValue()!);

    if (!this.myClientControl.getRawValue()) {
      return this.openSnackBar('Please choose a client');
    }

    if (!this.selectedRoom) {
      return this.openSnackBar('Please choose a room type');
    }

    if (await this.checkAvailability(hotel[0])) {
      return this.openSnackBar(
        'This room is already booked, choose different date'
      );
    }

    if (await this.checkDoubleBooking(client[0])) {
      return this.openSnackBar(
        'This client already has a booking in this date range'
      );
    }

    try {
      await DataStore.save(
        new Reservation({
          Hotel: hotel[0],
          Client: client[0],
          dateIn: moment(this.dates.checkIn).unix(),
          dateOut: moment(this.dates.checkOut).unix(),
        })
      );

      this.openSnackBar('The reservations is saved', true);
    } catch (err) {
      this.openSnackBar('We faced some error to add new reservation');
    }
  }

  /** checks if there are reservation
   *  for selected room type, with
   *  check-in or check-out between the selected dates
   *  the found reservations are the rooms that not available
   */
  async checkAvailability(hotel: Hotel) {
    let timeIn: number;
    let timeOut: number;
    this.dates.checkIn != ''
      ? (timeIn = moment(this.dates.checkIn).unix())
      : this.openSnackBar('Please pick a date for check-in');
    this.dates.checkIn != ''
      ? (timeOut = moment(this.dates.checkOut).unix())
      : this.openSnackBar('Please pick a date for check-out');

    let booking = await DataStore.query(Reservation, (q) =>
      q
        .reservationHotelId('eq', hotel.id)
        .reservationRoomId('eq', this.selectedRoom!.id)
        .dateIn('between', [timeIn, timeOut])
        .dateOut('between', [timeIn, timeOut])
    );

    return this.selectedRoom!.amount > booking.length;
  }

  /** checks of the client has reservations
   * that check-on or check-out are in the selected dates
   */
  async checkDoubleBooking(client: Client) {
    let timeIn: number;
    let timeOut: number;
    this.dates.checkIn != ''
      ? (timeIn = moment(this.dates.checkIn).unix())
      : this.openSnackBar('Please pick a date for check-in');
    this.dates.checkIn != ''
      ? (timeOut = moment(this.dates.checkOut).unix())
      : this.openSnackBar('Please pick a date for check-out');
    let bookings = await DataStore.query(Reservation, (c) =>
      c
        .reservationClientId('eq', client.id)
        .or((c) =>
          c
            .dateIn('between', [timeIn, timeOut])
            .dateOut('between', [timeIn, timeOut])
        )
    );

    return bookings.length > 0;
  }
}
