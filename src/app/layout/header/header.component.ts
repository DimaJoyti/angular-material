import { Component, NgModule } from "@angular/core";
import { transition, trigger, style, animate, 
  query, stagger, animateChild } from "@angular/animations";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('list', [
      transition(':enter', [
        query('@items', stagger(300, animateChild()))
      ]),
    ]),
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', 
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', 
         style({ 
           transform: 'scale(0.5)', opacity: 0, 
           height: '0px', margin: '0px' 
         })) 
      ])
    ]),
  ]
})
export class HeaderComponent{
  otherTheme: boolean = false; 
  counter = 5;
  list = [];
  
  add(){
    this.list.push(this.counter++);
  }

  remove(index) {
    if(!this.list.length) return;
    this.list.splice(index, 1);
  }

  changeTheme() {
    this.otherTheme = !this.otherTheme;
  }
}
