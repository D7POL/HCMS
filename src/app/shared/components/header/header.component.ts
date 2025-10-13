import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(public readonly auth: AuthService) {}

  logout(): void {
    this.auth.logout();
  }
}


