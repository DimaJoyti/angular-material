import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RoutingModule } from "./app.routing.module";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from './material.module';
import { PagesModule } from './pages/pages.module';
import { CoreModule } from "./services/core.module";
import { ChatModule } from './chat/chat.module';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
export const firebaseConfig = environment.firebaseConfig;
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from "./layout/footer/footer.component";
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { MessagingService } from "./services/massaging/messaging.service";


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
    CoreModule,
    ChatModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
