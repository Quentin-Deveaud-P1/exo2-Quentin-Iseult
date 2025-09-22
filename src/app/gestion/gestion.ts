import {Component, OnInit} from '@angular/core';
import {InfoService} from '../info-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gestion',
  imports: [],
  templateUrl: './gestion.html',
  styleUrl: './gestion.scss'
})
export class Gestion implements OnInit {
  constructor(protected infoService: InfoService, protected router: Router) {}

  ngOnInit(): void {
    if (!this.infoService.formSubmitted) {
      this.router.navigate(['/page404']);
    }
  }
}
