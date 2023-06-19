import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{
  form: any;
  public ContactUS: any = FormGroup;
  submitted = false;

  constructor(private FormBuilder: FormBuilder,) { }
  ngOnInit(): void {
    this.ContactUS = this.FormBuilder.group({
      name: ["",[Validators.required]],
      mail: ["", [Validators.email, Validators.required]],
      phone: ["", [Validators.required, Validators.pattern('[6-9]{1}[0-9]{9}')]],
      city: ["",[Validators.required]],
      country: ["",[Validators.required]],
      inquirytype: ["",[Validators.required]],
      remark: ["", [Validators.required]],
    });
  }

  get formControl() {
    return this.ContactUS.controls;
  }

  get name () 
  {
    return this.ContactUS.get('name');
  }
  get mail () 
  {
    return this.ContactUS.get('mail');
  }
  get phone () 
  {
    return this.ContactUS.get('phone');
  }
  get city () 
  {
    return this.ContactUS.get('city');
  }
  get country () 
  {
    return this.ContactUS.get('country');
  }
  get inquirytype () 
  {
    return this.ContactUS.get('inquirytype');
  }
  get remark () 
  {
    return this.ContactUS.get('remark');
  }

  onSubmit(data: any) {
    this.submitted = true;
    if (this.ContactUS.valid) {
     alert("Submitted Sucessfully")
    }
  }
}
