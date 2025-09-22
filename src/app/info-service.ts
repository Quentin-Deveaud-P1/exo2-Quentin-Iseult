import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  public infoForm: { [key: string]: string } = {
    prenom: "",
    nom: "",
    age:"",
    email: "",
    commentaire: ""
  };

  public showEmail = false;
  public formSubmitted = false;

  public setFormSubmitted(formSubmitted: boolean) {
    this.formSubmitted = formSubmitted;
  }

  public emailShow(){
    this.showEmail = !this.showEmail;
  }

  public saveInfoForm(prenom: string | null | undefined, nom: string | null | undefined, age: string | null | undefined, email: string | null | undefined, commentaire: string | null | undefined){
    if (prenom != null) {
      this.infoForm["prenom"] = prenom;
    }
    if (nom != null) {
      this.infoForm["nom"] = nom;
    }
    if (age != null) {
      this.infoForm["age"] = age;
    }
    if (email != null) {
      this.infoForm["email"] = email;
    }
    if (commentaire != null) {
      this.infoForm["commentaire"] = commentaire;
    }
  }

}
