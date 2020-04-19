import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { map } from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class DataService {

  sheetId: string = environment.sheetId
  headers: any
  constructor(
    private _http: HttpClient
  ) { }


  /**
   * Gets data from google sheets and transforms it into a readable key/value pair object
   */
  getData() {
    return this._http.get(`https://spreadsheets.google.com/feeds/cells/${this.sheetId}/1/public/full?alt=json`)
      .pipe(
        map((data: any) => {
          let table = new Map()
    
          data.feed.entry.forEach((entry) => {
    
            // Check if row exists in the map, else create it
            if(!table.has(entry['gs$cell'].row)) {
    
              let row = {}
              row[entry['gs$cell'].col] = entry['gs$cell'].inputValue
    
              table.set(entry['gs$cell'].row, row)
    
            } else {
    
              let row = table.get(entry['gs$cell'].row)
              row[entry['gs$cell'].col] = entry['gs$cell'].inputValue
    
              table.set(entry['gs$cell'].row, row)
    
            }
    
          })
    
          // return the table to view
          return table
    
        }),
        map((data) => {
          this.headers = data.get('1')
          data.delete('1')

          return data
        })

      )
  }
}
