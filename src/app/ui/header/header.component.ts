import { Component, NgModule } from "@angular/core";
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule } from "@angular/material";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{}

@NgModule({
  imports: [MatMenuModule, MatToolbarModule, MatButtonModule, MatIconModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
})
export class HeaderModule {}