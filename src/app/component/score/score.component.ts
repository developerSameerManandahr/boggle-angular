import {Component, OnInit} from '@angular/core';
import {UserScore} from '../../model/score';
import {Router} from '@angular/router';
import {DataService} from '../../service/data-service/data.service';
import {ApiService} from '../../service/api/api.service';

@Component({
  selector: 'app-score-page',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  public userScore: UserScore;

  public highScores: Array<UserScore> = [];
  displayedColumns: string[] = ['username', 'score'];

  constructor(
    private router: Router,
    private dataService: DataService<UserScore>,
    private apiService: ApiService
  ) {
    this.dataService.currentData.subscribe(value => this.userScore = value);
  }

  ngOnInit(): void {
    if (!this.userScore.username) {
      this.router.navigate(['/']);
    }
    this.apiService.submitUserScore(this.userScore)
      .then(async () => {
        this.highScores = await this.apiService.getAllScore();
      });
  }

  async exit() {
    localStorage.clear();
    await this.router.navigate(['/']);
  }
}
