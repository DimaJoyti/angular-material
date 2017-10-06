import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RoutingModule } from "./app.routing.module";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

import {
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule
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
import { FlexLayoutModule } from '@angular/flex-layout';

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
    FlexLayoutModule,
    RoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    PagesModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    
    MatToolbarModule, MatIconModule,
    MatSidenavModule, MatMenuModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
