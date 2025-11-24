import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExpandableText } from '../expandable-text/expandable-text';
import { TextToggleService } from '../../services/text-toggle';

@Component({
  selector: 'app-characteristics',
  imports: [RouterLink, ExpandableText],
  templateUrl: './characteristics.html',
  styleUrl: './characteristics.css',
})
export class Characteristics {
  textsCollapsed;
  
  constructor(private textToggleService: TextToggleService) {
    this.textsCollapsed = this.textToggleService.getTextsCollapsed();
  }
}
