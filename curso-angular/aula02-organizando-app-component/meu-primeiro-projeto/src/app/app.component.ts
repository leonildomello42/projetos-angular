import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>{{titulo}}</h1> <app-title> </app-title> <app-title> </app-title> <router-outlet></router-outlet>'
})
export class AppComponent {
  
  public titulo = "Bem vindo";
  title = 'meu-primeiro-projeto';
}
