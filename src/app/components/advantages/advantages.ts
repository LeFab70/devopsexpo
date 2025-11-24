import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExpandableText } from '../expandable-text/expandable-text';
import { TextToggleService } from '../../services/text-toggle';

@Component({
  selector: 'app-advantages',
  imports: [RouterLink, ExpandableText],
  templateUrl: './advantages.html',
  styleUrl: './advantages.css',
})
export class Advantages {
  textsCollapsed;
  
  constructor(private textToggleService: TextToggleService) {
    this.textsCollapsed = this.textToggleService.getTextsCollapsed();
  }
}
