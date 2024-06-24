import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

interface Star {
  x: number;
  y: number;
  size: number;
  fadeInDuration: number;
  fadeOutDuration: number;
  color: string;
  fadeInDelay: number; // Nuevo campo para el delay de fadeIn
}

interface Comet {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

@Component({
  selector: 'app-stars-background',
  templateUrl: './stars-background.component.html',
  styleUrls: ['./stars-background.component.css']
})
export class StarsBackgroundComponent implements OnInit, AfterViewInit {

  stars: Star[] = [];
  comets: Comet[] = [];

  @ViewChild('starsContainer') starsContainer!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    this.generateStars();
    this.generateComets();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.applyAnimationDelays();
    });
  }

  public random(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  private generateStars(): void {
    for (let i = 0; i < 100; i++) {
      const size = this.random(1, 4);
      const x = this.random(0, window.innerWidth);
      const y = this.random(0, window.innerHeight);
      const fadeInDuration = this.random(1, 3);
      const fadeOutDuration = this.random(1, 3);
      const color = this.randomColor();
      const fadeInDelay = this.random(0, 10); // Calcula un delay para el fadeIn
      const star: Star = {
        x,
        y,
        size,
        fadeInDuration,
        fadeOutDuration,
        color,
        fadeInDelay
      };
      this.stars.push(star);
    }

    const sectors = 30;
    const sectorWidth = window.innerWidth / sectors;

    for (let sector = 0; sector < sectors; sector++) {
      let density;
      if (sector % 2 === 0) {
        density = this.random(15, 50);
      } else {
        density = this.random(5, 60);
      }
      for (let i = 0; i < density; i++) {
        const size = this.random(0.5, 1.5);
        const x = this.random(sector * sectorWidth, (sector + 1) * sectorWidth);
        const y = this.random(0, window.innerHeight);
        const fadeInDuration = this.random(20, 3);
        const fadeOutDuration = this.random(1, 15);
        const color = '#ffffff'; // Color blanco para "polvo"
        const fadeInDelay = this.random(0, 10); // Calcula un delay para el fadeIn
        const star: Star = {
          x,
          y,
          size,
          fadeInDuration,
          fadeOutDuration,
          color,
          fadeInDelay
        };
        this.stars.push(star);
      }
    }
  }
  private generateComets(): void {
    const numComets = 5; // Número de cometas
    for (let i = 0; i < numComets; i++) {
      const size = this.random(1, 3); // Tamaño del cometa
      const x = this.random(0, window.innerWidth);
      const y = this.random(0, window.innerHeight);
      const duration = this.random(5, 15); // Duración de la animación del cometa
      const delay = this.random(0, 10); // Retraso para la animación del cometa
      const color = '#ffffff'; // Color blanco para los cometas
      const comet: Comet = {
        x,
        y,
        size,
        duration,
        delay,
        color
      };
      this.comets.push(comet);
    }
  }

  private randomColor(): string {
    const colors = ['#f8d210', '#00a1e4', '#ff6347'];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }

  private applyAnimationDelays(): void {
    if (this.starsContainer && this.starsContainer.nativeElement) {
      const starElements = this.starsContainer.nativeElement.querySelectorAll('.star');
      starElements.forEach((starElement: Element, index: number) => {
        const star = this.stars[index];
        (starElement as HTMLElement).style.animationDelay = star.fadeInDelay + 's';
      });
    }
  }
}
