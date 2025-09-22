import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {InfoService} from '../info-service';
import {Router} from '@angular/router';

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
    age: new FormControl(''),
    email: new FormControl(''),
    commentaire: new FormControl('', Validators.required),
    checkbox: new FormControl(false)
  });

  constructor(private infoService: InfoService, private router: Router) {}

  public emailShow() {
    this.infoService.emailShow();

    if (!this.infoService.showEmail) {
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
      const {prenom, nom, age, email, commentaire} = this.profileForm.value;

      this.infoService.saveInfoForm(prenom, nom, age, email, commentaire);
      this.infoService.setFormSubmitted(true);

      this.profileForm.reset();
      this.infoService.showEmail = false;
      alert('Formulaire Valide');
      this.router.navigate(['/accueil']);
    }
  }
}
