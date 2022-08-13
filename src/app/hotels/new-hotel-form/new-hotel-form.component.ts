import { Component, OnDestroy } from '@angular/core';
import { Hotel } from 'src/models';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStore } from 'aws-amplify';

@Component({
  selector: 'app-new-hotel-form',
  templateUrl: './new-hotel-form.component.html',
  styleUrls: ['./new-hotel-form.component.scss'],
})
export class NewHotelFormComponent implements OnDestroy {
  hotel: {
    name: string;
    address: string;
    picture: string;
  } = {
    name: '',
    address: '',
    picture: '',
  };

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  snackBarSub?: Subscription;
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  //TODO add url url sanitization
  async createHotel() {
    try {
      await DataStore.save(
        new Hotel({
          name: this.hotel.name,
          address: this.hotel.address,
          picture: this.hotel.picture,
          searchName: this.hotel.name.toLowerCase(),
        })
      );

      this.openSnackBar(true);
    } catch (error) {
      this.openSnackBar(false);
    }
  }

  openSnackBar(success: boolean) {
    let message = success
      ? 'Hotel added successfully'
      : 'We faced some error to add new hotel';
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
