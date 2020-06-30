import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DateTimePicker(Zaheen)';
  date: Date = new Date();
  settings = {
    bigBanner: true,
    timePicker:true,
    format: 'dd-MM-yyyy hh:mm a',
    defaultOpen: false

  };
  

}
