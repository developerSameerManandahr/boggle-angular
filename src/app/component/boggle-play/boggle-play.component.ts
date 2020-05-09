import {Component, OnInit} from '@angular/core';
import {WordGeneratorService} from '../../service/word-generator.service';
import {Letter} from '../../model/letter';
import {Router} from '@angular/router';
import {WordManagerService} from '../../service/word-manager/word-manager.service';
import {ApiService} from '../../service/api/api.service';
import {DataService} from '../../service/data-service/data.service';
import {UserScore} from '../../model/score';

@Component({
  selector: 'app-word-box',
  templateUrl: './boggle-play.component.html',
  styleUrls: ['./boggle-play.component.scss'],
  providers: [WordGeneratorService, ApiService]
})
export class BogglePlayComponent implements OnInit {
  public letterMatrix: Array<Array<Letter>> = [];
  public squareLength = 4;
  public wordList = [];
  public username = '';
  public score = 0;
  public currentWord: string;

  constructor(
    private wordManagerService: WordManagerService,
    private wordGeneratorService: WordGeneratorService,
    private apiService: ApiService,
    private router: Router,
    private dataService: DataService<UserScore>,
  ) {
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    if (!this.username) {
      this.router.navigate(['/'])
        .catch((reason) => console.error('Error while navigation', {reason}));
    }
    this.letterMatrix = this.wordGeneratorService.generateWordMatrix(this.squareLength);
  }

  public addWord(letter: Letter) {
    this.wordManagerService.add(letter);
    this.getWord();
  }

  /**
   * method that is called after word is submitted
   */
  public async submit() {
    const word = this.wordManagerService.getWord();
    if (word.length >= 3) {
      const score = await this.apiService.validateWordAndCalculateScore(word);
      if (score.valid) {
        if (!this.wordList.find(value => word === value)) {
          this.score += score.score;
          this.wordList.push(word);
        }
        this.clearCurrentWord();
      } else {
        this.clearCurrentWord();
        alert('No such word in dictionary !!');
      }
    } else {
      alert('Cannot submit words with less than 3 characters');
    }
  }

  public removeLastLetter(): void {
    this.wordManagerService.removeLastLetter();
  }

  public getWord() {
    this.currentWord = this.wordManagerService.getWord();
    console.log('cw', this.currentWord);
  }

  public clearCurrentWord() {
    this.currentWord = '';
    this.wordManagerService.clear();
  }

  public async endGame() {
    this.dataService.changeData({
      username: localStorage.getItem('username'),
      score: this.score
    });
    this.wordList = [];
    this.username = '';
    this.score = 0;
    this.currentWord = '';
    await this.router.navigate(['/score']);
  }

  public async receiveEvent() {
    this.endGame();
  }
}
