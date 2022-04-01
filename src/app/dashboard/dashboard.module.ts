import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import {MatDividerModule} from '@angular/material/divider';
import { TableViewComponent } from './components/table-view/table-view.component';
import { MatTableModule } from '@angular/material/table'
import { NgChartsModule } from 'ng2-charts';
import { PlotViewComponent } from './components/plot-view/plot-view.component';



@NgModule({
  declarations: [
    DashboardComponent,
    TableViewComponent,
    PlotViewComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatDividerModule,
    MatTableModule,
    NgChartsModule
  ]
})
export class DashboardModule { }
