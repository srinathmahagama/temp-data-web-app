import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import {MatDividerModule} from '@angular/material/divider';
import { TableViewComponent } from './components/table-view/table-view.component';
import { MatTableModule } from '@angular/material/table'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgChartsModule } from 'ng2-charts';
import { PlotViewComponent } from './components/plot-view/plot-view.component';
import { FilterOptionsComponent } from './components/filter-options/filter-options.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'
import {MatDatepickerModule} from '@angular/material/datepicker'
import { HttpClientModule } from '@angular/common/http';
import { DashbaordService } from './services/dashbaord.service';
import {MatButtonModule} from '@angular/material/button'


@NgModule({
  declarations: [
    DashboardComponent,
    TableViewComponent,
    PlotViewComponent,
    FilterOptionsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatDividerModule,
    MatTableModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [DashbaordService]
})
export class DashboardModule { }
