import { Component,EventEmitter,Input, Output } from '@angular/core';

export class User {
    constructor(public Name: string, public Quant: string) {
    }
  }
@Component({
    selector: 'app-root',
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css']
})
export class ProdComponent{
    head: String = 'Demonstration of Built-in directives and data binding';
    head2: String = 'Products list';
    toggle: Boolean = false;
    @Output() loggedIn = new EventEmitter<User>();
    // name: String = ''
    // quantity: number = 0
    prod = [];
    onClick( name,quantity){
        // if (isNaN(quantity) {
        //     throw new Error("It is not a number");
        //   }
        this.toggle= true;
        if (name && quantity) {
            this.prod.push([name,quantity]);          
            console.log(`Emitted product details: ${name} ${quantity}`);
            this.loggedIn.emit(new User(name,quantity));
          }
     }
  }