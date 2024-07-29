import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../../services/film.service';
import { IFilms } from '../../interfaces/film.interface';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-film-detail',
  standalone: true,
  imports: [CommonModule, ProgressSpinnerModule],
  templateUrl: './film-detail.component.html',
  styleUrl: './film-detail.component.scss'
})
export class FilmDetailComponent {
  film: IFilms | undefined;
  filmId: string = '';
  constructor(
    private route: ActivatedRoute,
    private filmsService: FilmService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.filmsService.getDetailFilm(id).subscribe(data => {
        this.film = data;
      })
    }
  }

  getTheNumber(data: any) {
    const match = data.match(/\/(\d+)\/$/);
    return match ? parseInt(match[1], 10) : null;
  }

  goToDetailView(type: string, typeId: any) {
    const number = this.getTheNumber(typeId);

    this.router.navigate([`/${type}`, number]);
  }
}
