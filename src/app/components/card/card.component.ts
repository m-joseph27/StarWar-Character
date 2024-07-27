import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PeopleService } from '../../services/people.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { IPeople, IPerson } from '../../interfaces/people.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, ProgressSpinnerModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  people: IPeople[] = [];

  constructor(
    private peopleService: PeopleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.peopleService.getPeople().subscribe((data: any) => {
      this.people = data.results;
    })
  }

  toDetailPerson(character: any) {
    const characterId = character.url.split('/').filter(Boolean).pop();
    this.router.navigate(['/people', characterId]);
  }
}