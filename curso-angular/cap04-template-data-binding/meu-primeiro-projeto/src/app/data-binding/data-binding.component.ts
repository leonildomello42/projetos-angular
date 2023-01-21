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

  public position: {x : number, y: number} = {x: 0, y: 0};

  constructor(){}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public alertaInfo2(valor: string): void {
    alert(valor);
  }

  public alertaInfo(valor: MouseEvent): void {
    console.log(valor);
  }

  public mouseMoveTest(valor: MouseEvent): void {
    // console.log(valor);

    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

  // public mouseMoveTest(valor: any): void {
  //   // console.log(valor);

  //   this.position.x = valor.offsetX;
  //   this.position.y = valor.offsetY;
  // }
}
