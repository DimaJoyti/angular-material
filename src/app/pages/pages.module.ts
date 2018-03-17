import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../layout/material.module";
import { ProductComponent } from "./product/product.component";
import { PostsComponent } from './posts/posts.component';
import { TableComponent } from './table/table.component';
import { TableService } from "./table/table.service";
import { ContentComponent } from "./content/content.component";
import { ContentfulService } from "./content/contentful.service";
import { MdToHtmlPipe } from "./content/md-to-html.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    ProductComponent,
    ContentComponent,
    PostsComponent,
    TableComponent,
    MdToHtmlPipe
  ],
  providers: [TableService, ContentfulService]
})
export class PagesModule {}
