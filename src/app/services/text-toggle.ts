import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextToggleService {
  private textsCollapsed = signal(true);
  
  getTextsCollapsed() {
    return this.textsCollapsed.asReadonly();
  }
  
  toggleTexts() {
    this.textsCollapsed.update(value => !value);
  }
  
  setTextsCollapsed(collapsed: boolean) {
    this.textsCollapsed.set(collapsed);
  }
}
