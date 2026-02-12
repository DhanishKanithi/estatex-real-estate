import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { provideAnimations } from '@angular/platform-browser/animations';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
// import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, Navbar, Footer],
  // providers: [provideAnimations()],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  // animations: [
  //   trigger('routeFade', [
  //     transition('* <=> *', [
  //       style({ opacity: 0, transform: 'translateY(12px)' }),
  //       animate(
  //         '400ms ease-out',
  //         style({ opacity: 1, transform: 'translateY(0)' })
  //       )
  //     ])
  //   ])
  // ]
})
export class App {}
