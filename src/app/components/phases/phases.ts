import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExpandableText } from '../expandable-text/expandable-text';
import { Modal } from '../modal/modal';
import { TextToggleService } from '../../services/text-toggle';

@Component({
  selector: 'app-phases',
  imports: [RouterLink, ExpandableText, Modal],
  templateUrl: './phases.html',
  styleUrl: './phases.css',
})
export class Phases {
  textsCollapsed;
  modalOpen = signal(false);
  modalTitle = '';
  modalIcon = '';
  modalContent = '';
  
  constructor(private textToggleService: TextToggleService) {
    this.textsCollapsed = this.textToggleService.getTextsCollapsed();
  }
  
  openModal(title: string, icon: string, content: string) {
    this.modalTitle = title;
    this.modalIcon = icon;
    this.modalContent = content;
    this.modalOpen.set(true);
  }
  
  closeModal() {
    this.modalOpen.set(false);
  }
}
