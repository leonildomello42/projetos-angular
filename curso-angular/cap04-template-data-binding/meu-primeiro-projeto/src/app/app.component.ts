import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{valor}}</h1> 
  <button (click)="adicionar()">Adicionar</button>
  <app-title *ngIf="destruir"></app-title>
  <br>
  <button (click)="destruirComponente()">Destruir componente</button>
  <br>
  <app-data-binding></app-data-binding>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  public titulo: string = "Bem vindo";

  public destruir: boolean = true;
  public valor: number = 1;
  title = 'meu-primeiro-projeto';

  constructor (){};


  ngOnInit(): void {

    // setTimeout( () =>{
    //   console.log("retono");
    // }, 5000)
  }

  // ngDoCheck(): void {
  //   console.log("ngDoCheck")
  //   throw new Error('Method not implemented.');
  // }

  public adicionar(): number {
    return this.valor +=1;
  }

  public destruirComponente(): void{
    this.destruir = false;
  } 


  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

}
