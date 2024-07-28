import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IPlanet } from '../../interfaces/planet.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanetService } from '../../services/planet.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-planet-detail',
  standalone: true,
  imports: [CommonModule, ProgressSpinnerModule],
  templateUrl: './planet-detail.component.html',
  styleUrl: './planet-detail.component.scss'
})
export class PlanetDetailComponent {
  planet: IPlanet | undefined;

  constructor(
    private route: ActivatedRoute,
    private planetService: PlanetService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.planetService.getDetailPlanets(id).subscribe(data => {
        this.planet = data;
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
}
