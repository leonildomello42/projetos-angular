import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title: string = "Bem vindo ao meu componente";

  constructor(){}

  ngOnInit(): void { }

  ngOnChanges(): void {
    console.log("Foi feita alteracao com sucesso!")
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   throw new Error('Método não implementado.');
  // }


  ngOnDestroy(): void {

    console.log("Componente destruido!")
    // throw new Error('Method not implemented.');
  }

  
}
