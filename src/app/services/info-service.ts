import { Injectable } from '@angular/core';
import {ContactData} from '../interfaces/contact-data';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  public infoForm: ContactData = {
    prenom: "",
    nom: "",
    age:"",
    email: "",
    commentaire: "",
    checkbox: true,
  };

  public showEmail = false;
  public formSubmitted = false;

  public setFormSubmitted(formSubmitted: boolean) {
    this.formSubmitted = formSubmitted;
  }

  public emailShow(){
    this.showEmail = !this.showEmail;
  }

  public saveInfoForm(data :ContactData){
    if (data.prenom != null) {
      this.infoForm["prenom"] = data.prenom;
    }
    if (data.nom != null) {
      this.infoForm["nom"] = data.nom;
    }
    if (data.age != null) {
      this.infoForm["age"] = data.age;
    }
    if (data.email != null) {
      this.infoForm["email"] = data.email;
    }
    if (data.commentaire != null) {
      this.infoForm["commentaire"] = data.commentaire;
    }
  }

}
