import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ProductComponent } from "./product/product.component";
import { ProfileComponent } from "./profile/profile.component";
import { PostsComponent } from './posts/posts.component';
import { MaterialModule } from "../services/material.module";
import { TableComponent } from './table/table.component';
import { TableService } from './../services/table/table.service';

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
    PostsComponent,
    TableComponent
  ],
  providers: [TableService]
})
export class PagesModule {}
