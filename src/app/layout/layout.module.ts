import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "./material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule
  ],
  exports: [HeaderComponent, FooterComponent],
  declarations: [HeaderComponent, FooterComponent]
})
export class LayoutModule {}
