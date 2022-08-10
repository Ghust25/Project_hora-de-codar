import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Joaquim"
  userData = {
    email: "andre@gmail.com",
    role: "Admim",
    address: "Rua Jamelão 774",
    city: "Holivency",
    uf: "RJ"
  }

  title = 'curso-angular';
}
