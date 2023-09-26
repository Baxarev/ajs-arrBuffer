import { Mathh } from '../Mathh';
import { Daemon } from '../Daemon';

describe('test', () => {
  let test = new Daemon();
  it('test1', () => {
    test.attack = 2;
    expect(test.attack).toBe(9);
  });

  it('test2', () => {
    test.stoned = 'on';
    test.stoned = 'of';
    expect(test.stoned).toBe(false);
  });

  it('test2', () => {
    test.stoned = 'on';
    test.attack = 1;
    expect(test.attack).toBe(9);
  });
});