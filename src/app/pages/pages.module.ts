import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../layout/material.module";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ProductComponent } from "./product/product.component";
import { ProfileComponent } from "./profile/profile.component";
import { PostsComponent } from './posts/posts.component';
import { TableComponent } from './table/table.component';
import { TableService } from "../core/table/table.service";
import { ContentfulService } from "./content/service/contentful.service";
import { MdToHtmlPipe } from './content/pipe/md-to-html.pipe';
import { ContentComponent } from './content/component/content/content.component';

@NgModule({
  imports: [
    CommonModule, 
    MaterialModule
  ],
  declarations: [
    ProductComponent,
    ContentComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    PostsComponent,
    TableComponent,
    MdToHtmlPipe,
  ],
  providers: [TableService, ContentfulService]
})
export class PagesModule {}
