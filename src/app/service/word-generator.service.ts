import {Injectable} from '@angular/core';
import {Letter} from '../model/letter';

@Injectable({
  providedIn: 'root'
})
export class WordGeneratorService {

  constructor() {
  }

  /**
   * Generates random word matrix of the given length
   * @param length length to provide
   */
  public generateWordMatrix(length: number = 4): Array<Array<Letter>> {
    const stringMatrix: Array<Array<Letter>> = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      stringMatrix[i] = [];
      for (let j = 0; j < length; j++) {
        const character = this.getCharacter(characters, charactersLength);
        const position = i * 10 + j;
        stringMatrix[i][j] = {
          character,
          position,
          isSelected: false
        };
      }
    }
    return stringMatrix;
  }

  private getCharacter(characters: string, charactersLength: number) {
    return characters.charAt(Math.floor(Math.random() * charactersLength));
  }
}
