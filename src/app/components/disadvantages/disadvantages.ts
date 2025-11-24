import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExpandableText } from '../expandable-text/expandable-text';
import { TextToggleService } from '../../services/text-toggle';

@Component({
  selector: 'app-disadvantages',
  imports: [RouterLink, ExpandableText],
  templateUrl: './disadvantages.html',
  styleUrl: './disadvantages.css',
})
export class Disadvantages {
  textsCollapsed;
  
  constructor(private textToggleService: TextToggleService) {
    this.textsCollapsed = this.textToggleService.getTextsCollapsed();
  }
}
