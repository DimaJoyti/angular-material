import { Component, NgModule } from "@angular/core";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  otherTheme: boolean = false; 

  changeTheme() {
    this.otherTheme = !this.otherTheme;
  }
}
