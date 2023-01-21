import { Component, DebugEventListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit{


  public nome: string = "Dener"
  public idade: number = 29;
  public maisUm: number = 1;
  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://www.eusemfronteiras.com.br/wp-content/uploads/2018/04/38566282_m-810x525.jpg";
  public imgTitle: string = "Título da imagem"
  constructor(){}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
