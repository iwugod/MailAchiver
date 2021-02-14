import { Component, ChangeDetectorRef, OnInit,  Input, Output, EventEmitter } from '@angular/core';
export interface ArchiveData {
  id: number;
  from: string;
  to: any;
  subject: string;
  date: string;
  body: any;
  attachment: any,
  hasAttachment: boolean,
  showBody: boolean
}

const ARCHIVE_DATA: ArchiveData[] = [
  { id: 1, from: 'aaa@example.com', to: ['zzz.zzz@example.com'], subject: '[ HR-888 ] Notice of official announcement', date: '01/02/2021', body: "Testing test 1", attachment: "", hasAttachment: false, showBody: false },
  { id: 2, from: 'bbb.bbbb@exam.com', to: ['yyy@example.com'], subject: '[web:333] "Web Contact"', date: '02/02/2021', body: "Testing test 1", attachment: "", hasAttachment: false, showBody: false },
  { id: 3, from: 'ccc@example.com', to: ['xxx@example.com', 'xxx1@example.com'], subject: 'Happy New Year! Greetings for the New Year.', date: '03/02/2021', body: "Testing test 2", attachment: [{ filename: 'contracts' }], hasAttachment: true, showBody: false },
  { id: 4, from: 'ddd.dddd@exam.com', to: ['vvv.vvv@example.com', 'vvv2.vvv@example.com'], subject: '[HR-887(Revised: Office Expansion Project Team)] Notice of off vised: Office Expansion Project Team)] Notice of off', date: '04/02/2021', body: "Testing test 3", attachment: "", hasAttachment: false, showBody: false },
  { id: 5, from: 'eee@example.com', to: ['sss@example.com', 'sss2@example.com', 'sss3@example.com'], subject: '[Github] Logout page', date: '05/02/2021', body: "Testing test 4", attachment: "", hasAttachment: false, showBody: false },
  { id: 6, from: 'fff.ffff@example.com', to: ['qqq.qqq@example.com'], subject: 'dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5', date: '06/02/2021', body: "Testing test 5", attachment: "", hasAttachment: false, showBody: false },
  { id: 7, from: 'ggg@example.com', to: ['ppp@example.com'], subject: 'Re: [Github] Brush-up on loading animation', date: '07/02/2021', body: "Testing test 6", attachment: "", hasAttachment: false, showBody: false },
  { id: 8, from: 'hhh.hhh@exampple.com', to: ['ooo.ooo@example.com'], subject: 'Workplace Summary for sample, Inc.: Jun 2 - Jun 9', date: '08/02/2021', body: "Testing test 7", attachment: "file23", hasAttachment: true, showBody: false },
  { id: 9, from: 'iii@example.com', to: ['nnn@example.com'], subject: 'I love you', date: '09/02/2021', body: "Testing test 8", attachment: "filetest", hasAttachment: true, showBody: false },
  { id: 10, from: 'Pablo-Diego-map@test.com', to: ['Pablo-Diego-José-Francisc'], subject: '[info:888] ABC EQUIPMENT COMPANY', date: '10/02/2021', body: "Testing test 9", attachment: "", hasAttachment: false, showBody: false },
];

@Component({
  selector: 'app-achive-results',
  templateUrl: './achive-results.component.html',
  styleUrls: ['./achive-results.component.scss']
})

export class AchiveResultsComponent implements OnInit{
  dataSource = ARCHIVE_DATA;
  filterDataSource : any =[];
  hideTable = false;
  noResultFound: boolean = false;
  @Output() resultLengthEvent = new EventEmitter<any>();

  @Input() dateSelected :string;

  constructor(private cDF: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit():void {
    setTimeout(() => {
      this.resultLengthEvent.emit(0);
      this.cDF.detectChanges(); 
    },0);
  }

  ngOnChanges() {
    this.showArchiveResult(this.dateSelected);
  }

  showArchiveResult(showArchiveResult: string) {
  
    if (showArchiveResult != "" && showArchiveResult !== undefined) {
      let splitDate = showArchiveResult.split("-");
      let startDate = splitDate[0].replace(/\s/g, '');
      let endDate = splitDate[1].replace(/\s/g, '');

      this.filterDataSource = [...this.dataSource];

      let filterItems = this.filterDataSource.filter((list: any) => {
        if (list.date >= startDate && list.date <= endDate) {
          return list;
        }
      });

      if(filterItems.length == 0){
        this.noResultFound = true;
        this.hideTable = false;
        setTimeout(() => {
          this.resultLengthEvent.emit(0);
          this.cDF.detectChanges(); 
        },0);
      }
      else
      {
        this.filterDataSource = filterItems;
        this.hideTable = true;
        this.noResultFound = false;
        setTimeout(() => {
          this.resultLengthEvent.emit(this.filterDataSource.length);
          this.cDF.detectChanges(); 
        },0);
      }
    }
    else {
      this.filterDataSource = this.dataSource;
      this.hideTable = false;
      this.noResultFound = false;
      setTimeout(() => {
        this.resultLengthEvent.emit(0);
        this.cDF.detectChanges(); 
      },0);
    }
  }

  toggleArchiveBody(data: any) {
    if (data.showBody == true) {
      data.showBody = !data.showBody;
    }
    else {
      // [...this.filterDataSource].map((list: any) => {
      //  list.showBody = false;
      // });
      data.showBody = !data.showBody;
    }
  }

}
