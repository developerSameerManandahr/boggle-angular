import {Component, OnInit} from '@angular/core';
import {WordGeneratorService} from '../../service/word-generator.service';
import {Letter} from '../../model/letter';
import {Router} from '@angular/router';
import {WordManagerService} from '../../service/word-manager/word-manager.service';

@Component({
  selector: 'app-word-box',
  templateUrl: './word-box.component.html',
  styleUrls: ['./word-box.component.scss'],
  providers: [WordGeneratorService]
})
export class WordBoxComponent implements OnInit {
  public letterMatrix: Array<Array<Letter>> = [];
  public squareLength = 4;
  public wordList = [];
  public username = '';

  constructor(
    private wordGeneratorService: WordGeneratorService,
    private wordManagerService: WordManagerService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    if (!this.username) {
      this.router.navigate(['/']);
    }
    this.getWords();
  }

  public addWord(letter: Letter) {
    this.wordManagerService.add(letter);
  }

  public submit() {
    const word = this.wordManagerService.getWord();
    if (word.length >= 3) {
      if (!this.wordList.find(value => word === value)) {
        this.wordList.push(word);
      }
      this.wordManagerService.clear();
    } else {
      alert('Cannot submit words with less than 3 characters');
    }
  }

  private getWords(): void {
    this.letterMatrix = this.wordGeneratorService.generateWordMatrix(this.squareLength);
  }
}
