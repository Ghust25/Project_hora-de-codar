import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = "André Gustavo";
  age: number = 26;
  height: number = 163;
  sex: string = "M";
  teaching: string = "Médio completo"
  profession: string = "developer";


  constructor() { }

  ngOnInit(): void {
  }

}
