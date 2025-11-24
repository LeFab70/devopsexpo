import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExpandableText } from '../expandable-text/expandable-text';
import { TextToggleService } from '../../services/text-toggle';

@Component({
  selector: 'app-roles',
  imports: [RouterLink, ExpandableText],
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})
export class Roles {
  textsCollapsed;
  
  constructor(private textToggleService: TextToggleService) {
    this.textsCollapsed = this.textToggleService.getTextsCollapsed();
  }
}
