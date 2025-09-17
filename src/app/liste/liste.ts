import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  imports: [],
  templateUrl: './liste.html',
  styleUrl: './liste.scss'
})
export class Liste {

  public listFilms = [
    {id:1, name: 'nom1', affiche:'poster_aftersun.jpg'},
    {id:2, name: 'nom2', affiche:'poster_grand-budapest-hotel.jpg'},
    {id:3, name: 'nom3', affiche:'poster_julie-en-12-chapitres.jpg'},
    {id:4, name: 'nom4', affiche:'poster_lost-in-translation.jpg'},
    {id:5, name: 'nom5', affiche:'poster_past-lives.jpg'}
  ];
}
