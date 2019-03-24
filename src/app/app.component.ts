import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private snackbar: MatSnackBar) {}

  displaySnackbar() {
  this.snackbar.open('Snackbar Message', 'Close', {
    //Everyting works if we comment out the duration.
    //It appears that protractor may be waiting for the duration
    //to expire before it looks for it.
    duration: 10000
    });
  }
}
