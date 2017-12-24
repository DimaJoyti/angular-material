import { NgModule } from "@angular/core";
import { AuthService } from "./auth/auth.service";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireDatabaseModule } from "angularfire2/database";

export const firebaseConfig = environment.firebaseConfig;
import { environment } from "../../environments/environment";

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService]
})
export class CoreModule {}
