import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gym-masr';
  _opened: boolean = true;
 
  _toggleSidebar() {
    this._opened = !this._opened;
  }
}
