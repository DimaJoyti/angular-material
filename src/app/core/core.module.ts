import { NgModule } from "@angular/core";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { AuthModule } from "../auth/auth.module";

@NgModule({
  imports: [
    AuthModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: []
})
export class CoreModule { }
