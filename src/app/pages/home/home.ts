import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  cardTransform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';

  onMove(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 20;
    const rotateX = ((y / rect.height) - 0.5) * -20;

    this.cardTransform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  }

  onLeave() {
    this.cardTransform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  }
}
