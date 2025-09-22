import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {InfoService} from '../info-service';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  public profileForm = new FormGroup({
    prenom: new FormControl('', Validators.required),
    nom : new FormControl('', Validators.required),
    email: new FormControl(''),
    commentaire : new FormControl('')
  });

  constructor(private infoService: InfoService) {}

  public emailShow(){
    this.infoService.emailShow();
  }

  public getShowEmail(){
    return this.infoService.showEmail;
  }

  public onSubmit() {
    if (this.profileForm.valid) {
      const {prenom, nom, email, commentaire} = this.profileForm.value;

      this.infoService.saveInfoForm(prenom, nom, email, commentaire);
      this.infoService.setFormSubmitted(true);
    }
  }
}
