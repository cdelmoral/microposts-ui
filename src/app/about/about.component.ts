import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mp-about',
  template: `
    <h1>About works!</h1>
    <p>Find me in src/app/about/about.component.html</p>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
