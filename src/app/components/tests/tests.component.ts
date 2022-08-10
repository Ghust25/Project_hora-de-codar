import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  htmlString = '<h1>Hello gowtham</h1>';

  constructor() { }

  ngOnInit() {
  }

}
