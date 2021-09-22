import {MatSnackBar} from '@angular/material/snack-bar';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private _snackBar: MatSnackBar) { }

  public openSnackBar(message: string): void {
    this._snackBar.open(message, 'Ok', {duration: 3000});
  }
}
