import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchiveResultsComponent } from './achive-results.component';

describe('AchiveResultsComponent', () => {
  let component: AchiveResultsComponent;
  let fixture: ComponentFixture<AchiveResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchiveResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchiveResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
