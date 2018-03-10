import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RoutingModule } from "./app.routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { AgmCoreModule } from '@agm/core';
import { PagesModule } from "./pages/pages.module";
import { LayoutModule } from "./layout/layout.module";
import { CoreModule } from "./core/core.module";
import { ChatModule } from "./chat/chat.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { SidenavComponent } from "./layout/sidenav/sidenav.component";
import { MessagingService } from './core/massaging/messaging.service';

import { AppStoreModule } from "./store/app.store.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AgmCoreModule,
    BrowserModule.withServerTransition({ appId: "APP_ID" }),
    RoutingModule,
    HttpClientModule,
    PagesModule,
    LayoutModule,
    CoreModule,
    ChatModule,
    AppStoreModule
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
