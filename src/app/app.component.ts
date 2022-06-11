import { Component, OnDestroy } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar-EG';
registerLocaleData(localeAr);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy  {


  constructor() {

  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
