import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, tap } from 'rxjs';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.css']
})
export class FilterOptionsComponent implements OnInit {

  @Output() onSearchEmit = new EventEmitter();
  @Output() onLiveModeEmit = new EventEmitter();
  @Output() onDefaultModeEmit = new EventEmitter();

 searchForm!: FormGroup;
 liveMode = false;
 
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.listenToSearch();
  }

  createForm(): void {
    this.searchForm = this.formBuilder.group({
      sensorId: [''],
      roomId: [''],
      temperature: [''],
      position: [''],
      startDate: [''],
      endDate: ['']
    })
    
  }

  listenToSearch(){
    this.searchForm.valueChanges
      .pipe(
        debounceTime(1000),
        tap(res => {
          this.onSearchEmit.emit(res)
        })
      ).subscribe();
  }

  reset(){
    this.searchForm.reset();
  }

  isTouched(){
    return this.searchForm.dirty
  }

  switchToLive(){
    this.onLiveModeEmit.emit(true);
    this.liveMode = true;
  }

  defaultMode() {
    this.liveMode = false;
    this.onDefaultModeEmit.emit(true)
  }
}
