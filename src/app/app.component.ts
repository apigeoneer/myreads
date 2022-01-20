import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myreads';

  expandMyReadingList() {
    console.log('expandMyReadingList');
  }

  filterBooks(filter: string) {
    console.log('filter: ', filter);
  }
}
