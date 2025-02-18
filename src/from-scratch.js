// Question 1: Stack Implementation
class Stack {
  #values = [];

  // Adds an element to the stack
  push(data) {
    this.#values.push(data);
  }

  // Removes and returns the top element; returns null if stack is empty
  pop() {
    // Best practice: Explicitly return null to handle empty stack case
    if (this.isEmpty()) return null;
    return this.#values.pop();
  }

  // Returns the top element without removing it; returns null if stack is empty
  peek() {
    return this.isEmpty() ? null : this.#values[this.#values.length - 1];
  }

  // Checks if the stack is empty
  isEmpty() {
    return this.#values.length === 0;
  }

  // Returns the size of the stack
  getSize() {
    return this.#values.length;
  }
}

// Question 2: Queue Implementation
class Queue {
  #values = [];

  // Adds an element to the end of the queue
  enqueue(data) {
    this.#values.push(data);
  }

  // Removes and returns the front element; returns null if queue is empty
  dequeue() {
    // Best practice: Explicitly return null to handle empty queue case
    if (this.isEmpty()) return null;
    return this.#values.shift();
  }

  // Returns the front element without removing it; returns null if queue is empty
  peek() {
    return this.isEmpty() ? null : this.#values[0];
  }

  // Checks if the queue is empty
  isEmpty() {
    return this.#values.length === 0;
  }

  // Returns the size of the queue
  getSize() {
    return this.#values.length;
  }
}

// Question 3: Check for Balanced Parentheses
const isBalancedParentheses = (inputString) => {
  const stack = new Stack();
  const pairs = { "(": ")", "[": "]", "{": "}" };

  for (let char of inputString) {
    if (pairs[char]) {
      stack.push(char); // Push opening brackets
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.isEmpty() || pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.isEmpty(); // Stack should be empty if balanced
};

// Question 4: Check if a String is a Palindrome
const isPalindrome = (inputString) => {
  const stack = new Stack();
  const queue = new Queue();

  // Normalize input: remove non-alphanumeric characters and convert to lowercase
  const cleanedString = inputString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  for (let char of cleanedString) {
    stack.push(char);
    queue.enqueue(char);
  }

  // Compare elements from stack and queue
  while (!stack.isEmpty()) {
    if (stack.pop() !== queue.dequeue()) {
      return false;
    }
  }

  return true;
};

// Question 5: Convert Decimal to Binary
const decimalToBinary = (num) => {
  // Edge case for zero
  if (num === 0) return "0";

  const stack = new Stack();

  // Convert decimal to binary by continuously dividing by 2
  while (num > 0) {
    stack.push(num % 2);
    num = Math.floor(num / 2);
  }

  // Construct binary string from stack
  let binary = "";
  while (!stack.isEmpty()) {
    binary += stack.pop();
  }

  return binary;
};

module.exports = {
  Stack,
  Queue,
  isBalancedParentheses,
  isPalindrome,
  decimalToBinary,
};
