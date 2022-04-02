import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Position } from '../enum/position.enum';
import { TemperatureSensorData } from '../model/temperature.sensor.data.model';

@Injectable({
  providedIn: 'root'
})
export class DashbaordService {

  constructor(private httpClient: HttpClient) { }

  loadData(sensorId?: string, roomId?: number, temperature?: number, position?: Position, startDate?: Date, endDate?: Date): Observable<any> {

    let params = new HttpParams();

    if(sensorId != undefined){
      params = params.append('sensorId',sensorId)
    }

    if(roomId != undefined){
      params = params.append('roomId',roomId)
    }

    if(temperature != undefined){
      params = params.append('temperature', temperature)
    }

    if(position != undefined){
      params = params.append('position',position)
    }

    if(startDate != undefined && endDate != undefined){
     params = params.append('startDate',startDate?.toString()),
     params = params.append('endDate',endDate?.toString())
    }

    console.log(params)

    return this.httpClient.get('http://localhost:3000/sensor-temperature', { params: params });

  }


}
