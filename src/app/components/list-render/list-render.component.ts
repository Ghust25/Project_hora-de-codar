import { Component, OnInit } from '@angular/core';
import { ListService } from './../../services/list.service';

import { Animal } from 'src/app/interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 4 },
    { name: 'Tom', type: 'Cat', age: 3 },
    { name: 'Frida', type: 'Horse', age: 5 },
    { name: 'Leo', type: 'Dog', age: 6 },
    { name: 'Math', type: 'Cat', age: 7 },
    { name: 'Puca', type: 'Horse', age: 8 },
    { name: 'Olf', type: 'Dog', age: 9 },
    { name: 'Care', type: 'Cat', age: 2 },
    { name: 'Duce', type: 'Horse', age: 10 },
  ];
  animalDetailsAge = '';
  animalDetailsType = '';

  constructor(private listServive: ListService) {}

  ngOnInit(): void {}

  showAgeAnimal(animal: Animal): void {
    this.animalDetailsType = '';
    this.animalDetailsAge = this.listServive.showAge(animal);
  }

  showTypeAnimal(animal: Animal) {
    this.animalDetailsAge = '';
    this.animalDetailsType = this.listServive.showType(animal);
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...');
    this.animalDetailsType = '';
    this.animalDetailsAge = '';
    this.animals = this.listServive.remove(this.animals, animal);
  }
}
