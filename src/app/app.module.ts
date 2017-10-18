import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RoutingModule } from "./app.routing.module";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from './material.module';
import { PagesModule } from './pages/pages.module';
import { CoreModule } from "./services/core.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from "./ui/footer/footer.component";
import { SidenavComponent } from './ui/sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "APP_ID" }),
    BrowserAnimationsModule,
    RoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    PagesModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
