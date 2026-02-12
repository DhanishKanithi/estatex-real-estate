import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { PROPERTIES } from '../../data/properties.data';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './properties.html',
  styleUrls: ['./properties.scss']
})
export class Properties {
  properties = PROPERTIES;
}
