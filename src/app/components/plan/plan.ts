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
    // Utiliser un changement détecté pour s'assurer que les ViewChildren sont disponibles
    setTimeout(() => {
      this.setupIntersectionObserver();
    }, 100);
  }

  setupIntersectionObserver(): void {
    if (this.planCards.length === 0) {
      // Réessayer si les éléments ne sont pas encore disponibles
      setTimeout(() => this.setupIntersectionObserver(), 200);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = this.planCards.toArray().findIndex(
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
        threshold: 0.1, // Déclenche quand 10% de la carte est visible
        rootMargin: '50px' // Déclenche un peu avant que la carte entre dans le viewport
      }
    );

    // Observer chaque carte
    this.planCards.forEach((card) => {
      if (card.nativeElement) {
        observer.observe(card.nativeElement);
        // Vérifier si la carte est déjà visible au chargement
        const rect = card.nativeElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          const cardIndex = this.planCards.toArray().findIndex(
            c => c.nativeElement === card.nativeElement
          );
          if (cardIndex !== -1) {
            setTimeout(() => {
              this.openedCards.add(cardIndex);
            }, cardIndex * 150);
          }
        }
      }
    });
  }

  isCardOpened(index: number): boolean {
    return this.openedCards.has(index);
  }
}
