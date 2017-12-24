import { Component} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { Contact } from "../../../models/contact.model";
import { log } from "util";

@Component({
  selector: 'formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.scss']
})
export class FormlyComponent{
  contactForm: FormGroup;
  contactModel: Contact;
  contactFields: Array<FormlyFieldConfig>

  constructor() {
    this.contactForm = new FormGroup({});
    this.contactModel = new Contact();
    this.contactFields = this.contactModel.formFields();
  }

  submitForm(contact: Contact){
    console.log(contact);
  }
}
