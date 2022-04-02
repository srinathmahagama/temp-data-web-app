import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TemperatureSensorData } from '../../model/temperature.sensor.data.model';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  dataSource: TemperatureSensorData[] = [];
  isRequestLiveMode = false;

  @Input('sensorData') set sensorData(data: Observable<TemperatureSensorData[]>){
    console.log('in table ',data)
    data.subscribe(res => {
      this.dataSource = res;
      console.log(res)
    })
  };

  @Input() set liveMode(value: Observable<boolean>){
    value.subscribe(res=>{
      this.isRequestLiveMode = res;
    })
  }

  constructor() { }
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['Sensor', 'Room', 'Temperature', 'Position', 'Noted Date'];
  //dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
