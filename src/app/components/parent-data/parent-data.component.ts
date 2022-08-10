import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
@Input() name: string = '';
@Input() data!: {email: string, role: string, address: string, city: string, uf: string}

  constructor() { }

  ngOnInit(): void {
  }

}
