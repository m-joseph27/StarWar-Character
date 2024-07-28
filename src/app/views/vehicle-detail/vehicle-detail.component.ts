import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IVehicle } from '../../interfaces/vehicle.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-vehicle-detail',
  standalone: true,
  imports: [CommonModule, ProgressSpinnerModule],
  templateUrl: './vehicle-detail.component.html',
  styleUrl: './vehicle-detail.component.scss'
})
export class VehicleDetailComponent {
  vehicles: IVehicle | undefined;

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.vehicleService.getDetailVehicle(id).subscribe(data => {
        this.vehicles = data;
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
