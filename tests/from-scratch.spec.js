const path = require('path');
const ScoreCounter = require('score-tests');
const {
  Stack,
  Queue,
  isBalancedParentheses,
  isPalindrome,
  decimalToBinary
} = require('../src/from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {

  describe('Stack', () => {
    it('isEmpty - is empty by default', () => {
      const stack = new Stack();
      expect(stack.isEmpty()).toEqual(true);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('push - can add items', () => {
      const stack = new Stack();
      expect(stack.isEmpty()).toEqual(true);

      stack.push('a');
      stack.push('b');
      expect(stack.isEmpty()).toEqual(false);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('pop - can remove items', () => {
      const stack = new Stack();
      stack.push('a');
      expect(stack.pop()).toEqual('a');
      expect(stack.isEmpty()).toEqual(true);
      stack.push('b');
      stack.push('c');
      expect(stack.pop()).toEqual('c');
      expect(stack.isEmpty()).toEqual(false);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('getSize - accurately returns the number of elements in the stack', () => {
      const stack = new Stack();
      stack.push('b');
      stack.push('c');
      expect(stack.getSize()).toEqual(2);
      stack.pop();
      expect(stack.getSize()).toEqual(1);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('peek - can preview the next item', () => {
      const stack = new Stack();
      stack.push('b');
      stack.push('c');
      expect(stack.peek()).toEqual('c');
      stack.pop();
      expect(stack.peek()).toEqual('b');

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('values are private', () => {
      const stack = new Stack();
      stack.push('b');
      stack.push('c');
      expect(stack.getSize()).toEqual(2);
      expect(stack.values).toBe(undefined);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  describe('Queue', () => {
    it('isEmpty - is empty by default', () => {
      const queue = new Queue();
      expect(queue.isEmpty()).toEqual(true);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('enqueue - can add items', () => {
      const queue = new Queue();
      expect(queue.isEmpty()).toEqual(true);

      queue.enqueue('1st');
      queue.enqueue('2nd');
      expect(queue.isEmpty()).toEqual(false);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('dequeue - can remove items', () => {
      const queue = new Queue();
      queue.enqueue('1st');
      queue.enqueue('2nd');
      queue.enqueue('3rd');
      expect(queue.isEmpty()).toEqual(false);
      expect(queue.dequeue()).toEqual('1st');
      expect(queue.dequeue()).toEqual('2nd');
      expect(queue.dequeue()).toEqual('3rd');
      expect(queue.isEmpty()).toEqual(true);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('getSize - accurately returns the number of elements in the queue', () => {
      const queue = new Queue();
      queue.enqueue('1st');
      queue.enqueue('2nd');
      queue.enqueue('3rd');
      expect(queue.getSize()).toEqual(3);
      queue.dequeue();
      expect(queue.getSize()).toEqual(2);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('peek - can preview the next item', () => {
      const queue = new Queue();
      queue.enqueue('a');
      queue.enqueue('b');
      queue.enqueue('c');
      expect(queue.peek()).toEqual('a');
      queue.dequeue();
      expect(queue.peek()).toEqual('b');

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('values are private', () => {
      const queue = new Queue();
      queue.enqueue('a');
      queue.enqueue('b');
      queue.enqueue('c');
      expect(queue.getSize()).toEqual(3);
      expect(queue.values).toBe(undefined);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  describe('isBalancedParentheses', () => {
    it('can determine parentheses balance', () => {
      expect(isBalancedParentheses('()()')).toEqual(true);
      expect(isBalancedParentheses('()((')).toEqual(false);
      expect(isBalancedParentheses('()(()))')).toEqual(false);
      expect(isBalancedParentheses('((()))()')).toEqual(true);
      expect(isBalancedParentheses(')()(')).toEqual(false);

      scoreCounter.correct(expect); // DO NOT TOUCH
    })
  });

  describe('isPalindrome', () => {
    it('can determine if a string is a palindrome', () => {
      expect(isPalindrome('abba')).toEqual(true);
      expect(isPalindrome('racecar')).toEqual(true);
      expect(isPalindrome('palindrome')).toEqual(false);
      expect(isPalindrome('08052020')).toEqual(false);
      expect(isPalindrome('02022020')).toEqual(true);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  describe('decimalToBinary', () => {
    it('can convert decmials to binary', () => {
      expect(decimalToBinary(7)).toEqual('111');
      expect(decimalToBinary(42)).toEqual('101010');
      expect(decimalToBinary(225)).toEqual('11100001');

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
