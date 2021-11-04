import { Component, Input } from '@angular/core';

import { Person } from './person'

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() person: Person = { fullname: "someone name is full" };
  title = 'DemoSemAngular';
}
