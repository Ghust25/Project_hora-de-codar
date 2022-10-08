import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/interfaces/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-dattail',
  templateUrl: './item-dattail.component.html',
  styleUrls: ['./item-dattail.component.css']
})
export class ItemDattailComponent implements OnInit {
  animal?: Animal

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal()
  }

  ngOnInit(): void {
  }

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal))
  }
}
