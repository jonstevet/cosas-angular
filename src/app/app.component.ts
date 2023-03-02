import { Component } from '@angular/core';
import {product, register} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  widthImg:number = 20;
  name:string = 'JonSteve';
  age:number = 34;
  imgurl:string = 'https://www.w3schools.com/w3images/avatar2.png';
  btn101State:boolean = true;
  names:string[] = ['Jon', 'Steve', 'John', 'Stevie', 'Johnny'];
  newName:string = '';

  box = {
    width: '100',
    height: '100',
    background: 'red'
  }

  register:register = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
    country: ''
  };

  person = {
    name: 'JonSteve',
    age: 34,
    avatar: 'https://www.w3schools.com/w3images/avatar2.png'
  };

  products:product[] = [
    {name: 'Product 1', price: 100, img: './assets/images/avatar.png'},
    {name: 'Product 2', price: 200, img: './assets/images/avatar.png'},
    {name: 'Product 3', price: 300, img: './assets/images/avatar.png'},
    {name: 'Product 4', price: 400, img: './assets/images/avatar.png'},
    {name: 'Product 5', price: 500, img: './assets/images/avatar.png'},
  ];

  toggleBtn(): void {
    this.btn101State = !this.btn101State;
  }

  ageIncrease(): void {
    this.person.age++;
  }

  onScroll(event: Event): void {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  onPress(event: KeyboardEvent): void {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
    console.log(event.key);
  }

  onPressAddName(): void {
      this.names.push(this.newName);
      this.newName = '';
  }

  onPressRemoveName(index: number): void {
      this.names.splice(index, 1);
  }

  onRegister(): void {
    console.log(this.register);
  }
}
