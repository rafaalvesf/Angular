import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  name= new FormControl('');
  image= new FormControl('');
  updateName() {

    this.image.setValue('https://images.vexels.com/media/users/3/135716/isolated/preview/321b363dcf4d27cb2a94b73b572bca3b---cone-de-flor-colorida-2-by-vexels.png')
  }

  constructor() { }

  ngOnInit() {
  }

}

