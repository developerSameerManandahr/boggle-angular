import {TestBed} from '@angular/core/testing';

import {WordManagerService} from './word-manager.service';

describe('WordManagerService', () => {
  let service: WordManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add first word without any exception', () => {
    service.add({
      position: 23,
      character: 'a'
    });
    expect(service.getWord()).toBe('a');
    service.clear();
  });

  it('removeLastLetter() should remove last letter', () => {
    initWords();
    expect(service.getWord()).toBe('ace');
    service.removeLastLetter();
    expect(service.getWord()).toBe('ac');
    service.clear();
  });

  it('clear() should clear all words', () => {
    initWords();
    expect(service.getWord()).toBe('ace');
    service.clear();
    expect(service.getWord()).toBe('');
  });

  it('should throw error when letters are of random position', () => {
    initWords();
    try {
      service.add({
        character: 'r',
        position: 55
      });
    } catch (e) {
      expect(e.message).toBe('Cannot Add the letter');
    }
  });

  it('should throw error when already added position is clicked ', () => {
    initWords();
    try {
      service.add({character: 'q', position: 12});
    } catch (e) {
      expect(e.message).toBe('Already clicked');
    }
  });

  function initWords() {
    service.add({
      position: 23,
      character: 'a'
    });
    service.add({
      position: 13,
      character: 'c'
    });
    service.add({
      position: 12,
      character: 'e'
    });
  }
});
