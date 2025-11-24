import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExpandableText } from '../expandable-text/expandable-text';
import { TextToggleService } from '../../services/text-toggle';

@Component({
  selector: 'app-history',
  imports: [RouterLink, ExpandableText],
  templateUrl: './history.html',
  styleUrl: './history.css',
})
export class History {
  textsCollapsed;
  
  constructor(private textToggleService: TextToggleService) {
    this.textsCollapsed = this.textToggleService.getTextsCollapsed();
  }
}
