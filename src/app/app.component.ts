import { Component } from '@angular/core';
declare const fbq: any; // 1. add an ambient declaration
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'twb-front';

  purchase() {
    fbq('track', 'Purchase', { currency: 'USD', value: 30.0 });
  }
}
