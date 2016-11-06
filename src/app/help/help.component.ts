import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mp-help',
  template: `
    <h1>Help Works!</h1>
    <p>Find me in src/app/help/help.component.html</p>
  `,
  styles: []
})
export class HelpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
