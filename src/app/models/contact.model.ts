import { FormlyFieldConfig } from "@ngx-formly/core";

export class Contact {
  name: string;
  phone: string;
  email: string;

  formFields() {
    return <FormlyFieldConfig[]>[
      {
        key: "name",
        type: "input",
        templateOptions: {
          type: "text",
          label: "Name",
          placeholder: "Name",
          required: true
        },
        validation: {
          message: {
            required: "You need to provide a name!"
          }
        }
      },
      {
        key: "phone",
        type: "input",
        templateOptions: {
          type: "tel",
          label: "Phone Number",
          placeholder: "Phone Number",
          required: true
        },
        validation: {
          message: {
            required: "You need to provide a phone number!"
          }
        }
      },
      {
        key: "email",
        type: "input",
        templateOptions: {
          type: "email",
          label: "Email",
          placeholder: "Email",
          required: true
        },
        validation: {
          message: {
            required: "You need to provide a email!"
          }
        }
      }
    ];
  }
}
