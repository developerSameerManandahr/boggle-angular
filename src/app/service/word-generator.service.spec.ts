import { TestBed } from '@angular/core/testing';

import { WordGeneratorService } from './word-generator.service';

describe('WordGeneratorService', () => {
  let wordGeneratorService: WordGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    wordGeneratorService = TestBed.inject(WordGeneratorService);
  });

  it('should generate word as per length', () => {
    const randomWord = wordGeneratorService.generateWordMatrix(5);
    expect(randomWord.length).toBe(5);
  });
});
