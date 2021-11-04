import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: require('./app.component.html')
  template: '<router-outlet></router-outlet>'
  //templateUrl: require('./app.component.html')//'./app.component.html'//,
  //styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'List of heroes';
}