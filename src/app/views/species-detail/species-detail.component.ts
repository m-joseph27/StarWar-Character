import { Component } from '@angular/core';
import { ISpecies } from '../../interfaces/species.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeciesService } from '../../services/species.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-species-detail',
  standalone: true,
  imports: [CommonModule, ProgressSpinnerModule],
  templateUrl: './species-detail.component.html',
  styleUrl: './species-detail.component.scss'
})
export class SpeciesDetailComponent {
  species: ISpecies | undefined;

  constructor(
    private route: ActivatedRoute,
    private speciesService: SpeciesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.speciesService.getDetailSpecies(id).subscribe(data => {
        this.species = data;
      });
    }
  }

  getTheNumber(data: any) {
    const match = data.match(/\/(\d+)\/$/);
    return match ? parseInt(match[1], 10) : NaN;
  }
}
