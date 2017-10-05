import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RoutingModule } from "./app.routing.module";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

import {
  MdToolbarModule,
  MdSidenavModule,
  MdMenuModule,
  MdButtonModule,
  MdIconModule
} from "@angular/material";

import "hammerjs";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { environment } from "../environments/environment";
export const firebaseConfig = environment.firebaseConfig;

import { AppComponent } from "./app.component";
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from "./ui/footer/footer.component";
import { SidenavComponent } from './ui/sidenav/sidenav.component';

import { PagesModule } from './pages/pages.module';

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
    HttpModule,
    HttpClientModule,
    PagesModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    
    MdToolbarModule, MdIconModule,
    MdSidenavModule, MdMenuModule, MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
