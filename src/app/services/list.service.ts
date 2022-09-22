import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  showAge(animal: Animal) {
    return `O pet ${animal.name} tem ${animal.age} anos!`
  }

  showType(animal: Animal) {
    return `O pet ${animal.name} é um ${animal.type}!`
  }

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.name !== a.name);
  }
}
