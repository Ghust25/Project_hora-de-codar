import { Component, OnInit } from '@angular/core';
import { ListService } from './../../services/list.service';

import { Animal } from 'src/app/interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];
  animalDetailsAge = '';
  animalDetailsType = '';

  constructor(private listServive: ListService) {
    this.getAnimals()
  }

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
    this.animals = this.animals.filter((a) => animal.name !== a.name)
    this.listServive.remove(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listServive.getAll().subscribe((animals) => this.animals = animals);
  }
}
