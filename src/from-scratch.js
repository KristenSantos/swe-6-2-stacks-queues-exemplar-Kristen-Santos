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
  // Supports multiple types of brackets, but only '(' and ')' are needed for this assignment
  const pairs = { "(": ")", "[": "]", "{": "}" };

  for (let char of inputString) {
    if (pairs[char]) {
      // Push opening bracket onto the stack
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      // If closing bracket is encountered, check if it matches the last opened one
      if (stack.isEmpty() || pairs[stack.pop()] !== char) {
        // Unmatched closing bracket or empty stack means unbalanced
        return false;
      }
    }
  }
  // If stack is empty, all brackets were properly matched
  return stack.isEmpty();

  // Note: The current approach also works for square and curly brackets,
  // but for this assignment, we only need to check '(' and ')'.
};

// Question 4: Check if a String is a Palindrome
const isPalindrome = (inputString) => {
  // Normalize input: remove non-alphanumeric characters
  const cleanedString = inputString.replace(/[^a-zA-Z0-9]/g, "");
  const stack = new Stack();

  // Make a stack
  for (let char of cleanedString) {
    // Push all characters into the stack
    stack.push(char);
  }

  // Iterate through the string:
  for (let char of cleanedString) {
    // Pop the top character from the stack
    if (stack.pop() !== char) {
      // If the popped character does NOT match the current character, it is not a palindrome
      return false;
    }
  }

  // If you make it to the end of the string, it is a palindrome
  return true;
};

// Question 5: Convert Decimal to Binary
const decimalToBinary = (num) => {
  // Edge case for zero
  if (num === 0) return "0";

  const stack = new Stack();

  // Convert decimal to binary by continuously dividing by 2
  while (num > 0) {
    // Store the remainder (either 0 or 1), which represents the least significant bit (LSB) first
    stack.push(num % 2);
    // Reduce the number by dividing by 2
    num = Math.floor(num / 2);
  }

  // Construct binary string from stack
  let binary = "";
  while (!stack.isEmpty()) {
    // Read bits in reverse order (from most significant to least significant)
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
