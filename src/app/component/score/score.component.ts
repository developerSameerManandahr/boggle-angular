import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-page',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  public score = 100;
  constructor() { }

  ngOnInit(): void {
  }

}
