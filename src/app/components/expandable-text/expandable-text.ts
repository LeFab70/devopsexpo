import { Component, Input, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expandable-text',
  imports: [CommonModule],
  templateUrl: './expandable-text.html',
  styleUrl: './expandable-text.css',
})
export class ExpandableText {
  @Input() text: string = '';
  @Input() collapsed: boolean = true;
  
  isExpanded = signal(false);
  
  constructor() {
    // Réinitialiser l'état quand collapsed change
    effect(() => {
      if (this.collapsed && this.isExpanded()) {
        this.isExpanded.set(false);
      }
    });
  }
  
  toggle(): void {
    this.isExpanded.update(value => !value);
  }
}
