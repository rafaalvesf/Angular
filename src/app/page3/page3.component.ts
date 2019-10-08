import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cliente: Cliente = new Cliente();

salvar(){
  console.log(this.cliente);
  
}

}
