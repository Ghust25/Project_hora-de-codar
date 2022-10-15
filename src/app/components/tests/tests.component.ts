import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  htmlString = '<h1> TESTES Abaixo </h1>';
  slidePoint!: number

  formatLabel(value: number) {
    if (value >= 1) {
      return Math.round(value / 1) + '%';
    }
    return value;
  }

  constructor() { }

  ngOnInit() {
  }

}
