import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {name: "Turca", type: "Dog", age: 4},
    {name: "Tom", type: "Cat", age: 3},
    {name: "Frida", type: "Horse", age: 5},
    {name: "Leo", type: "Dog", age: 6},
    {name: "Math", type: "Cat", age: 7},
    {name: "Puca", type: "Horse", age: 8},
    {name: "Olf", type: "Dog", age: 9},
    {name: "Care", type: "Cat", age: 2},
    {name: "Duce", type: "Horse", age: 10},
  ];

animalDetails = '';

  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

}
