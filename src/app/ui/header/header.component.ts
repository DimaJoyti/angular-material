import { Component, NgModule } from "@angular/core";
import { MdToolbarModule, MdMenuModule, MdButtonModule, MdIconModule } from "@angular/material";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{}

@NgModule({
  imports: [MdMenuModule, MdToolbarModule, MdButtonModule, MdIconModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
})
export class HeaderModule {}