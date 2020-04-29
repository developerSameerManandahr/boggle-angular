import {Component, OnInit} from '@angular/core';
import {WordGeneratorService} from '../../service/word-generator.service';
import {Letter} from '../../model/letter';
import {Router} from '@angular/router';
import {WordManagerService} from '../../service/word-manager/word-manager.service';
import {DICTIONARY} from '../../dictonary';

@Component({
  selector: 'app-word-box',
  templateUrl: './boggle-play.component.html',
  styleUrls: ['./boggle-play.component.scss'],
  providers: [WordGeneratorService]
})
export class BogglePlayComponent implements OnInit {
  public letterMatrix: Array<Array<Letter>> = [];
  public squareLength = 4;
  public wordList = [];
  public username = '';
  public score: number;

  constructor(
    private wordManagerService: WordManagerService,
    private wordGeneratorService: WordGeneratorService,
    private router: Router,
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
  }

  /**
   * method that is called after word is submitted
   */
  public submit() {
    const word = this.wordManagerService.getWord();
    if (word.length >= 3) {
      if (DICTIONARY.includes(word.toLowerCase())) {
        if (!this.wordList.find(value => word === value)) {
          this.wordList.push(word);
        }
        this.wordManagerService.clear();
      } else {
        alert('No such word in dictionary !!');
      }
    } else {
      alert('Cannot submit words with less than 3 characters');
    }
  }

  public removeLastLetter(): void {
    this.wordManagerService.removeLastLetter();
  }

  public getWord(): string {
    return this.wordManagerService.getWord();
  }
}
