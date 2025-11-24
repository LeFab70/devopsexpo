import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FloatingMenu } from './components/floating-menu/floating-menu';
import { TextToggleService } from './services/text-toggle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FloatingMenu, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  textsCollapsed;
  
  constructor(private textToggleService: TextToggleService) {
    this.textsCollapsed = this.textToggleService.getTextsCollapsed();
  }
  
  toggleTexts() {
    this.textToggleService.toggleTexts();
  }
}
