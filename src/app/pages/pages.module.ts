import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ProductComponent } from "./product/product.component";
import { ProfileComponent } from "./profile/profile.component";
import { PostsComponent } from './posts/posts.component';

import { MaterialModule } from './../material.module';
import { DataService } from "../services/data.service";

@NgModule({
  imports: [
    CommonModule, 
    MaterialModule
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
