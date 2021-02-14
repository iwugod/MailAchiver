import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

import * as Pikaday from 'pikaday';

@Component({
  selector: 'app-landing-home',
  templateUrl: './landing-home.component.html',
  styleUrls: ['./landing-home.component.scss']
})
export class LandingHomeComponent {
  pikaday: Pikaday;
  init: any;
  start: any;
  end: any;
  showArchiveResult:boolean = false;

  @ViewChild('datepickerT') datepicker: ElementRef;

  @Output() emitSelectedDate = new EventEmitter<string>();

  resultLengthFromChild : any;

  dateSelected : string;

  constructor() {
  }

  ngAfterViewInit() {

    this.init = true;

    this.pikaday = new Pikaday({
      disableWeekends: true,
      format: 'DD/MM/YYYY',
      bound: true,
      field: this.datepicker.nativeElement,
      onClose: (() => {
        setTimeout(() => {
          if(this.start !== undefined && this.start !== "" && this.end == ""){
            this.pikaday.show();
            this.pikaday.setEndRange(null);
          }
        })
      }),
      onSelect: ((data) => {
        if (this.init) {
          this.start = data;
          this.pikaday.setStartRange(data);
          this.pikaday.setEndRange(null);
          this.end = "";
          this.pikaday.clear();
        }
        else {
          this.end = data;
          this.pikaday.setEndRange(data);
          this.rangeSet(this.start, this.end);
        }

        this.init = !this.init;
      })
    });
  }

  rangeSet(start: any, end: any) {
    start = this.getDateString(start);
    end = this.getDateString(end);
    this.datepicker.nativeElement.value = start + " - " + end;
  }

  getDateString(date: any) {
    return ("0" + (date.getDate())).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();
  }

  searchArchives(event:Event) {
    event.preventDefault();
    this.emitSelectedDate.emit(this.dateSelected);
    this.dateSelected = this.datepicker.nativeElement.value;
  }

  getResultLength(event:Event){
    this.resultLengthFromChild = event;
  }

}
