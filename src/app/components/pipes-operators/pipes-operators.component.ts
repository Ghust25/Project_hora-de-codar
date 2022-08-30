import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-operators',
  templateUrl: './pipes-operators.component.html',
  styleUrls: ['./pipes-operators.component.css']
})
export class PipesOperatorsComponent implements OnInit {
  someText = "TESTANDO O PIPE OPERATOR";
  today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
