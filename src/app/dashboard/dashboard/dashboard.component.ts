import { Component, OnInit } from '@angular/core';
import { combineLatest, filter, first, forkJoin, interval, map, Observable, of, Subject, takeUntil, takeWhile, tap, timeInterval, timer } from 'rxjs';
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
  isLiveMode = false;

  ngOnInit(): void {
    this.loadInitData();
  }

  loadInitData(){
    this.temperatureSensorData = this.dashboardService.loadData()
      .pipe(
        map(res =>{
          return res;
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
      );
  }

  handleLiveMode($event:any): void {
    this.liveModeSubject.next($event);
    this.isLiveMode = true;
    this.temperatureSensorData = this.temperatureSensorData.pipe(
      map(res =>{
        return res.slice(0,4);
      })
    )
    interval(10000)
      .pipe(
        tap(res =>{
          if(this.isLiveMode){
            this.temperatureSensorData = this.dashboardService.loadData()
                                            .pipe(
                                              map(res =>{
                                                return res.slice(0,4)
                                              })
                                            );

          }
          
        })
      ).subscribe();
  }

  handleDefaultMode($event: any): void{
    this.liveModeSubject.next(false);
    this.isLiveMode = false;
    this.temperatureSensorData = this.dashboardService.loadData()
      .pipe(
        map(res =>{
          return res;
        })
      )
  }

  getLiveMode(): Observable<boolean>{
   return this.liveModeSubject.asObservable();
  }

}
