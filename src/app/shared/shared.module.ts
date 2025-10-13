import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';



@NgModule({
  declarations: [
    LogoComponent,
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LogoComponent, HeaderComponent, SideNavComponent]
})
export class SharedModule { }
