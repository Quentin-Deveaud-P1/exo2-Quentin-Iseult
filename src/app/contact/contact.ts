import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {InfoService} from '../info-service';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  public profileForm = new FormGroup({
    prenom: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    email: new FormControl(''),
    commentaire: new FormControl(''),
    checkbox: new FormControl(false)
  });

  public formSent = false;

  constructor(private infoService: InfoService) {}

  public emailShow() {
    this.infoService.emailShow();

    if (this.infoService.showEmail) {
      this.profileForm.get('email')?.setValidators([Validators.required, Validators.email]);
    } else {
      this.profileForm.get('email')?.clearValidators();
      this.profileForm.get('email')?.setValue('');
    }
    this.profileForm.get('email')?.updateValueAndValidity();
  }

  public getShowEmail() {
    return this.infoService.showEmail;
  }

  public onSubmit() {
    if (this.profileForm.valid) {
      const {prenom, nom, email, commentaire} = this.profileForm.value;

      this.infoService.saveInfoForm(prenom, nom, email, commentaire);
      this.infoService.setFormSubmitted(true);
      this.formSent = true;

      setTimeout(() => {
        this.formSent = false;
      }, 5000)

      this.profileForm.reset();
      this.infoService.showEmail = false;
    }
  }
}
