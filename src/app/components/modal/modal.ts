import { Component, Input, Output, EventEmitter, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  @Input() isOpen = signal(false);
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() content: string = '';
  @Output() closeModal = new EventEmitter<void>();

  isVisible = signal(false);
  isAnimating = signal(false);

  constructor() {
    effect(() => {
      const open = this.isOpen();
      if (open) {
        this.open();
      } else if (this.isVisible()) {
        this.close();
      }
    });
  }

  open() {
    this.isVisible.set(true);
    setTimeout(() => {
      this.isAnimating.set(true);
    }, 10);
  }

  close() {
    this.isAnimating.set(false);
    setTimeout(() => {
      this.isVisible.set(false);
      this.closeModal.emit();
    }, 300);
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.isOpen.set(false);
    }
  }
}
