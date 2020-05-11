import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BogglePlayComponent } from './boggle-play.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('WordBoxComponent', () => {
  let component: BogglePlayComponent;
  let fixture: ComponentFixture<BogglePlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BogglePlayComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BogglePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
