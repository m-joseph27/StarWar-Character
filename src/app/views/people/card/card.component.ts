import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PeopleService } from '../../../services/people.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { IPeople } from '../../../interfaces/people.interface';
import { Router } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ProgressSpinnerModule,
    InfiniteScrollModule
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  people: IPeople[] = [];
  page: number = 1;
  limit = 10;
  loading: boolean = false;

  constructor(
    private peopleService: PeopleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.peopleService.getPeople(this.page).subscribe((data: any) => {
      this.people = data.results;
    })
  }

  toDetailPerson(character: any) {
    const characterId = character.url.split('/').filter(Boolean).pop();
    this.router.navigate(['/people', characterId]);
  }

  loadPeople() {
    this.loading = true;
    this.peopleService.getPeople(this.page).subscribe(response => {
      this.people = [...this.people, ...response.results];
      this.loading = false;
    });
  }

  onScroll() {
    if (!this.loading) {
      this.page++;
      this.loadPeople();
    }
  }
}