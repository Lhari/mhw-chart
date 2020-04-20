import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-creature',
  templateUrl: './creature.component.html',
  styleUrls: ['./creature.component.scss']
})
export class CreatureComponent implements OnInit {

  @Input('creature') creature
  elements = ['fire','water','thunder','ice','dragon','poison','sleep','paralysis','blast','stun']


  headers: any
  data: any = {}

  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
    this.headers = this._dataService.headers

    let localCreature = this.creature[1]


    // console.log(this.headers)

    for(let key of Object.keys(this.headers)) [
      this.data[this.headers[key]] = localCreature[key]
    ]
  }

}
