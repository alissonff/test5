import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  contactMethods = [
    { id: 1, name: 'Phone' },
    { id: 2, name: 'Email' },
    { id: 3, name: 'None' },
  ];

  log(x: any) {
    console.log(x);
  }
  submitted = false;
  submit(f: any) {
    this.submitted = true;
    console.log(f);
    // f.valid
  }
}
