/**
 * Class to manage the word that is formed by clicked letter
 */
export class Words {
  private words: Array<Letter> = [];

  /**
   * Added letter to word
   * @param letter: clicked letter
   */
  public add(letter: Letter) {
    if (!this.words.length) {
      this.words.push(letter);
    } else {
      this.comparePositionAndAdd(letter);
    }
  }

  /**
   * get actual string word from array of Letter interface
   */
  public getWord(): string {
    return this.words.map(value => value.character).join('');
  }

  /**
   * clear words array
   */
  public clear(): void {
    this.words = [];
  }

  /**
   * remove last letter from the forming word
   */
  public removeLastLetter() {
    this.words.pop();
  }

  private comparePositionAndAdd(letter: Letter): void {
    if (this.words.find(tempLetter => tempLetter.position === letter.position)) {
      throw Error('Already clicked');
    }
    const lastPosition = this.words[this.words.length - 1].position;
    const positions = this.generatePossibleNextPosition(lastPosition);
    if (positions.find(value => value === letter.position)) {
      this.words.push(letter);
    } else {
      throw Error('Cannot Add the letter');
    }
  }

  private generatePossibleNextPosition(position: number): Array<number> {
    const positions: Array<number> = [];
    const right = position + 1;
    positions.push(right);
    if (position >= 1) {
      const left = position - 1;
      positions.push(left);
    }
    if (position >= 10) {
      const top = position - 10;
      positions.push(top);
    }

    const bottom = position + 10;
    positions.push(bottom);
    if (position >= 11) {
      const topLeft = position - 11;
      positions.push(topLeft);
    }
    if (position >= 9) {
      const topRight = position - 10 + 1;
      positions.push(topRight);
    }
    const bottomLeft = position + 10 - 1;
    positions.push(bottomLeft);
    const bottomRight = position + 11;
    positions.push(bottomRight);
    return positions;
  }
}

/**
 * Letter model with character and position
 */
export interface Letter {
  character: string;
  position: number;
}
