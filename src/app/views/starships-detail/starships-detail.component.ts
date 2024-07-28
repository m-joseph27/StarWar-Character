import { Component } from '@angular/core';
import { IStarship } from '../../interfaces/starships.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { StarShipService } from '../../services/starship.service';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-starships-detail',
  standalone: true,
  imports: [CommonModule, ProgressSpinnerModule],
  templateUrl: './starships-detail.component.html',
  styleUrl: './starships-detail.component.scss'
})
export class StarshipsDetailComponent {
  starShips: IStarship | undefined;

  constructor(
    private route: ActivatedRoute,
    private starShipService: StarShipService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.starShipService.getDetailVehicle(id).subscribe(data => {
        this.starShips = data;
      });
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
