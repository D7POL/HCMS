import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DashboardLayoutComponent, HomeComponent],
  imports: [CommonModule, RouterModule, SharedModule, DashboardRoutingModule]
})
export class DashboardModule {}


