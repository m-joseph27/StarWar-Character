import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../services/people.service';
import { IPerson } from '../../interfaces/people.interface';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-people-detail',
  standalone: true,
  imports: [CommonModule, ProgressSpinnerModule],
  templateUrl: './people-detail.component.html',
  styleUrl: './people-detail.component.scss'
})
export class PeopleDetailComponent implements OnInit {
  person: IPerson | undefined;

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.peopleService.getDetailPerson(id).subscribe(data => {
        this.person = data;
      });
    }
  }

  getTheNumber(data: any) {
    const match = data.match(/\/(\d+)\/$/);
    return match ? parseInt(match[1], 10) : NaN;
  }

  goToDetailFilm(filmId: string) {
    const number = this.getTheNumber(filmId);

    this.router.navigate(['/films', number]);
  }

  goToDetailPlanet(planet: any) {
    const number = this.getTheNumber(planet.homeworld);

    this.router.navigate(['/planets', number]);
  }

  goToDetailVehicle(vehicle: any) {
    const number = this.getTheNumber(vehicle);

    this.router.navigate(['/vehicles', number]);
  }

  goToDetailStarship(vehicle: any) {
    const number = this.getTheNumber(vehicle);

    this.router.navigate(['/starships', number]);
  }
}
