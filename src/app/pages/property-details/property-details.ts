import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PROPERTIES } from '../../data/properties.data';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './property-details.html',
  styleUrls: ['./property-details.scss']
})
export class PropertyDetails {

  property: any;

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.property = PROPERTIES.find(p => p.id === id);
  }
}
