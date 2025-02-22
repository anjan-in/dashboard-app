import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    DashboardComponent
  ]
})
export class LayoutModule { }
