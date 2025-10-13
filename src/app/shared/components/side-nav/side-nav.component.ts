import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styles: ``
})
export class SideNavComponent {
  @Input() collapsed = false;
  items = [
    { label: 'Home', icon: 'home', link: '/dashboard' },
    { label: 'My Visits', icon: 'event', link: '/visits' },
    { label: 'Prescription', icon: 'receipt_long', link: '/prescriptions' },
    { label: 'Reports', icon: 'article', link: '/reports' },
    { label: 'Diseases', icon: 'healing', link: '/diseases' },
    { label: 'Tests', icon: 'biotech', link: '/tests' },
    { label: 'My Health Assistant', icon: 'smart_toy', link: '/assistant' }
  ];
}


