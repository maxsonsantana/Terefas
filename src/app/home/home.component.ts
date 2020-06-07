import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  itemCount = 4;
  btnText = 'Adicionar uma tarefa';
  objetivoText = 'Objetivos de vida';
  objetivos = [];

  constructor() { }
  ngOnInit() {
    this.itemCount = this.objetivos.length;
  }
  addItem(){
    this.objetivos.push(this.objetivoText);
    this.objetivoText = '';
    this.itemCount = this.objetivos.length;
  }
}
