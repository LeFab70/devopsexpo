import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { RouterLink } from '@angular/router';

interface PlanItem {
  number: string;
  emoji: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-plan',
  imports: [RouterLink],
  templateUrl: './plan.html',
  styleUrl: './plan.css',
})
export class Plan implements AfterViewInit {
  @ViewChildren('planCard') planCards!: QueryList<ElementRef>;

  planItems: PlanItem[] = [
    { number: '1', emoji: '1️⃣', title: 'Méthodologie DevOps', description: 'Introduction et concepts de base' },
    { number: '2', emoji: '2️⃣', title: 'Historique et Description', description: 'Origines et principes fondamentaux' },
    { number: '3', emoji: '3️⃣', title: 'Caractéristiques Clés', description: 'Intégration continue, automatisation' },
    { number: '4', emoji: '4️⃣', title: 'Phases et Rôles', description: 'Cycle DevOps et acteurs' },
    { number: '5', emoji: '5️⃣', title: 'Avantages & Désavantages', description: 'Analyse complète' },
    { number: '6', emoji: '6️⃣', title: 'Exemple & Conclusion', description: 'Netflix et synthèse' }
  ];

  openedCards: Set<number> = new Set();

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const cardIndex = Array.from(this.planCards).findIndex(
              card => card.nativeElement === entry.target
            );
            if (cardIndex !== -1 && !this.openedCards.has(cardIndex)) {
              setTimeout(() => {
                this.openedCards.add(cardIndex);
              }, cardIndex * 150); // Délai progressif pour l'animation
            }
          }
        });
      },
      {
        threshold: 0.3, // Déclenche quand 30% de la carte est visible
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observer chaque carte après un court délai pour s'assurer que les éléments sont rendus
    setTimeout(() => {
      this.planCards.forEach((card) => {
        observer.observe(card.nativeElement);
      });
    }, 100);
  }

  isCardOpened(index: number): boolean {
    return this.openedCards.has(index);
  }
}
