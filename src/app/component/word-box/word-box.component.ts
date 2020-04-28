import {Component, OnInit} from '@angular/core';
import {WordGeneratorService} from '../../service/word-generator.service';
import {Letter, Words} from '../../model/words';

@Component({
  selector: 'app-word-box',
  templateUrl: './word-box.component.html',
  styleUrls: ['./word-box.component.scss'],
  providers: [WordGeneratorService]
})
export class WordBoxComponent implements OnInit {
  public letterMatrix: Array<Array<Letter>> = [];
  public squareLength = 4;
  public words = new Words();
  public wordList = [];

  constructor(
    private wordGeneratorService: WordGeneratorService
  ) {
  }

  ngOnInit(): void {
    this.getWords();
  }

  getWords(): void {
    this.letterMatrix = this.wordGeneratorService.generateWordMatrix(this.squareLength);
    console.log('this.letterMatrix', this.letterMatrix);
  }

  addWord(letter: Letter) {
    this.words.add(letter);
    console.log(this.words.getWord());
  }

  submit() {
    const word = this.words.getWord();
    if (!this.wordList.find(value => word === value) && word.length >= 3) {
      this.wordList.push(word);
    }
    this.words.clear();
  }
}
