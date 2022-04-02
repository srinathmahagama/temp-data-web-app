import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Observable } from 'rxjs';
import { TemperatureSensorData } from '../../model/temperature.sensor.data.model';


@Component({
  selector: 'app-plot-view',
  templateUrl: './plot-view.component.html',
  styleUrls: ['./plot-view.component.css']
})
export class PlotViewComponent implements OnInit {

  barChartLabels!: any[];
  barChartData!: { data: number[], label: string }[];

  @Input('sensorData') set sensorData(data: Observable<TemperatureSensorData[]>) {
    data.subscribe(res => {
      this.barChartLabels = res.map(data => {
        return this.datePipe.transform(data.notedDate, 'medium')
      })
      const sensor1 = res
        .filter(data => data.sensorId == '1')
        .map(sensor1 => {
          return sensor1.temperature
        })
      const sensor2 = res
        .filter(data => data.sensorId == '2')
        .map(sensor2 => {
          return sensor2.temperature
        })
      this.barChartData = [
        { data: sensor1, label: 'Sensor 1' },
        { data: sensor2, label: 'Sensor 2' },
      ]
    })
  };

  constructor(private datePipe: DatePipe) { }

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  ngOnInit(): void {
  }

}
