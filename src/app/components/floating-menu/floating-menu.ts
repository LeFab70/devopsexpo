import { Component } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-floating-menu',
  imports: [RouterLink, CommonModule],
  templateUrl: './floating-menu.html',
  styleUrl: './floating-menu.css',
})
export class FloatingMenu {
  currentRoute: string = '/';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.url;
      });
  }
}
