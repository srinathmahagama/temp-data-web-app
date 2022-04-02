import { Component, OnInit } from '@angular/core';
import { filter, first, map, Observable, of, Subject, tap } from 'rxjs';
import { TemperatureSensorData } from '../model/temperature.sensor.data.model';
import { DashbaordService } from '../services/dashbaord.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashbaordService) { }

  temperatureSensorData!: Observable<TemperatureSensorData[]>;
  liveModeSubject = new Subject<boolean>();

  ngOnInit(): void {
    this.loadInitData();
  }

  loadInitData(){
    this.temperatureSensorData = this.dashboardService.loadData()
      .pipe(
        map(res =>{
          return res;
          // console.log('ffffffffff ',res);
          // this.temperatureSensorData = of(res);
          // console.log('jjjjjjjjjjj ',this.temperatureSensorData)
        })
      )
  }

  handleSearch($event: any): void {
    console.log($event)
    this.temperatureSensorData = this.dashboardService.loadData($event.sensorId, $event.roomId, $event.temperature, $event.position, $event.startDate, $event.endDate)
      .pipe(
        map(res =>{
          return res;
        })
      )
  }

  handleLiveMode($event:any): void {
    const arr: TemperatureSensorData[] = [];
    this.temperatureSensorData = this.temperatureSensorData.pipe(
      map(res =>{
        return Array.of(res[0])
      })
    )
    this.liveModeSubject.next($event);
  }

  handleDefaultMode($event: any): void{
    this.liveModeSubject.next(false);
    this.temperatureSensorData = this.dashboardService.loadData()
      .pipe(
        map(res =>{
          return res;
          // console.log('ffffffffff ',res);
          // this.temperatureSensorData = of(res);
          // console.log('jjjjjjjjjjj ',this.temperatureSensorData)
        })
      )
  }

  getLiveMode(): Observable<boolean>{
   return this.liveModeSubject.asObservable();
  }
}
