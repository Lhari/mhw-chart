import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  @Input('symbol') public symbol
  @Input('value') public value

  constructor() { }

  ngOnInit(): void {
  }

  isNumber(string) {
    return parseInt(string)
  }

}
