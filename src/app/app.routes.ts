import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Properties } from './pages/properties/properties';
import { PropertyDetails } from './pages/property-details/property-details';
import { Booking } from './pages/booking/booking';
import { Auth } from './pages/auth/auth';
import { authGuard } from './core/guards/auth.guard'

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'properties', component: Properties },
  { path: 'property/:id', component: PropertyDetails },
  { path: 'booking/:id', component: Booking , canActivate: [authGuard]},
  { path: 'login', component: Auth },
];
