import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  imports: [],
  templateUrl: './liste.html',
  styleUrl: './liste.scss'
})
export class Liste {

  public listFilms = [
    {id:1, name: 'nom1'},
    {id:2, name: 'nom2'},
    {id:3, name: 'nom3'},
    {id:4, name: 'nom4'},
    {id:5, name: 'nom5'}
  ];
}
