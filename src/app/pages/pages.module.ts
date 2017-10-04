import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ProductComponent } from "./product/product.component";
import { ProfileComponent } from "./profile/profile.component";
import { PostsComponent } from './posts/posts.component';

import { MatGridListModule } from '@angular/material';
import { DataService } from "../services/data.service";

@NgModule({
  imports: [
    CommonModule, 
    MatGridListModule
  ],
  declarations: [
    ProductComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    PostsComponent
  ],
  providers: [DataService]
})
export class PagesModule {}
