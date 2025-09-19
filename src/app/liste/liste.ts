import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  imports: [],
  templateUrl: './liste.html',
  styleUrl: './liste.scss'
})
export class Liste {
  public listFilms = [
    {id:1, name: 'Aftersun', affiche:'poster_aftersun.jpg'},
    {id:2, name: 'Grand Budapest Hotel', affiche:'poster_grand-budapest-hotel.jpg'},
    {id:3, name: 'Julie en 12 chapitres', affiche:'poster_julie-en-12-chapitres.jpg'},
    {id:4, name: 'Lost in translation', affiche:'poster_lost-in-translation.jpg'},
    {id:5, name: 'Past lives', affiche:'poster_past-lives.jpg'}
  ];

  selectedFilm: any = null;

  showFilmDetails(film: any) {
    this.selectedFilm = film;
  }


}
