import { Component } from '@angular/core';
import {InfoService} from '../info-service';

@Component({
  selector: 'app-gestion',
  imports: [],
  templateUrl: './gestion.html',
  styleUrl: './gestion.scss'
})
export class Gestion {
  constructor(protected infoService: InfoService) {}
}
