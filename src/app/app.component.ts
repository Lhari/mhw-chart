import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mhw-weakness-scheme';
  data: any
  constructor(
    private _dataService: DataService
  ) {
    this._dataService.getData().subscribe((data) => {

      this.data = Array.from(data.entries())
    })
  }
}
