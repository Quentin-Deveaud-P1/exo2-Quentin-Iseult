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
    {id:2, name: 'The Grand Budapest Hotel', affiche:'poster_grand-budapest-hotel.jpg'},
    {id:3, name: 'Julie en 12 Chapitres', affiche:'poster_julie-en-12-chapitres.jpg'},
    {id:4, name: 'Lost in Translation', affiche:'poster_lost-in-translation.jpg'},
    {id:5, name: 'Past Lives', affiche:'poster_past-lives.jpg'}
  ];

  selectedFilm: any = null;

  showFilmDetails(film: any) {
    this.selectedFilm = film;
  }


}
