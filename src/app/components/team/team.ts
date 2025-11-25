import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface TeamMember {
  initial: string;
  name: string;
  emoji: string;
  description: string;
}

@Component({
  selector: 'app-team',
  imports: [RouterLink],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team {
  members: TeamMember[] = [
    { initial: 'F', name: 'Fabrice', emoji: '👨‍💻', description: 'Membre de l\'équipe' },
    { initial: 'A', name: 'Aubie', emoji: '👨‍💼', description: 'Membre de l\'équipe' },
    { initial: 'G', name: 'Grace', emoji: '👩‍💻', description: 'Membre de l\'équipe' },
    { initial: 'P', name: 'Perez', emoji: '👨‍🔧', description: 'Membre de l\'équipe' }
  ];

  flippedCards: Set<number> = new Set();

  toggleCard(index: number): void {
    if (this.flippedCards.has(index)) {
      this.flippedCards.delete(index);
    } else {
      this.flippedCards.add(index);
    }
  }

  isFlipped(index: number): boolean {
    return this.flippedCards.has(index);
  }
}
