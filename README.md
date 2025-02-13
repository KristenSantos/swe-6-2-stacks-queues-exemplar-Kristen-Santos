# Assignment

- [Setup](#setup)
- [Testing Your Code](#testing-your-code)
  - [npm test](#npm-test)
  - [How To Read Tests](#how-to-read-tests)
  - [Submitting On Time](#submitting-on-time)
  - [playground.js](#playgroundjs)
- [Tasks](#tasks)
  - [Part 1. Implement a Stack.](#part-1-implement-a-stack)
  - [Part 2. Implement a Queue.](#part-2-implement-a-queue)
  - [Part 3: Interview Problems](#part-3-interview-problems)
    - [3. isBalancedParentheses](#3-isbalancedparentheses)
    - [4. isPalindrome](#4-ispalindrome)
    - [5. decimalToBinary](#5-decimaltobinary)
- [Leet Code Challenges](#leet-code-challenges)
  - [Stack](#stack)
  - [Queue](#queue)

## Setup

For guidance on setting up and submitting this assignment, refer to the Marcy lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/fullstack-curriculum/how-tos/working-with-assignments#how-to-work-on-assignments).

After cloning your repository, make sure to run the following commands:

```sh
npm i
git checkout -b draft
npm t
```

## Testing Your Code

### npm test

Before submitting your code, make sure you got things right by running the provided automated tests.

You can do this using the commands:

```sh
npm test # run the automated tests
npm run test:w # run the automated tests and rerun them each time you save a change
```

You will know that you have "completed" an assignment once you have passed 75% or more of the automated tests!

### How To Read Tests

All tests are made up of `expect()` statements that must all be true in order for the test to pass.

Remember, when reading tests ask yourself:
* How is the test using my code? What inputs are being provided to my functions?
* What is the test expecting my function to return?
* Is the test expecting my function to produce any side effects (printing something to the console, modifying the passed-in array, etc...)?

### Submitting On Time

You have to understand that "grades" don't exist at Marcy. We only need performance data in order to know how you're doing, and make sure the people who need help get it as quickly as they can. It's ok if you didn't finish by the deadline! Just show us what you have. We'll have office hours and reviews, and we want to know what you are all struggling with so we can use those meetings effectively. **This is not about grades, its about seeing what you know, and where we can help!**

### playground.js

The most straightforward way to test your code is to test your code by hand as you work. Invoke your functions and use `console.log()` to print out the results. Then, `cd` into the `src/` directory and use the `node <file_name>` command to run your JavaScript files. 

You can also create what's called a "playground" (or "sandbox") file where you import any code you need, and then mess around with that file. We've included one in the `src` directory so you can see it. Run that program using `node src/playground.js`.

## Tasks

### Part 1. Implement a Stack.

Your `Stack` class should have a private `#values` array and the following methods:
* `isEmpty`: This operation checks if the stack is empty, meaning it contains no elements.
* `push`: This operation adds an element to the top of the stack. As new elements are pushed onto the stack, they become the new top element.
* `pop`: This operation removes and returns the top element of the stack. It represents taking the most recently added element and removing it from the stack.
* `getSize`: This operation returns the number of elements currently in the stack.
* `peek`: This operation returns the top element of the stack without removing it. It allows you to see which element is at the top of the stack without actually popping it.

### Part 2. Implement a Queue.

Your `Queue` class should have a private `#values` array and the following methods:
* `isEmpty`: This operation checks if the queue is empty, meaning it contains no elements.
* `enqueue`: This operation adds an element to the rear or end of the queue. As new elements are added, they join the queue behind the existing elements.
* `dequeue`: This operation removes and returns the element at the front or beginning of the queue. It represents taking the first element that was added and served.
* `getSize`: This operation returns the number of elements currently in the queue.
* `peek`: This operation returns the element at the front of the queue without removing it. It allows you to see which element will be dequeued next without actually dequeuing it.

### Part 3: Interview Problems 

**Use a Stack to solve the following three problems in linear runtime.** 

These are common interview problems and you can find an algorithm to solve them online. We encourage you to **spend at least 15-20 minutes** trying to come up with an algorithm on your own before looking it up. If/when you find an algorithm online, **STOP before copying it** and take time to **understand and internalize the algorithm**. It might be helpful to make comments so that you can understand it when you come back to it later.

> Note: You should ideally be using the `Stack` class you just implemented. If your `Stack` class is not working properly, you may use a normal array, but limit yourself to stack-like operations (`push`, `pop`, peeking at the last element). Upon review, you will likely be asked to resubmit with a functional `Stack` class.

#### 3. isBalancedParentheses

Write a function, `isBalancedParentheses`, that returns a boolean value based on whether a string has balanced parentheses. Parentheses are balanced if: 
- **(1)** Every open parenthesis has a corresponding closing parenthesis and 

- **(2)** every pair of parentheses begins with an opening parenthesis.

Examples:
  ```
  ()()    => balanced
  ((()))  => balanced
  )()(    => unbalanced
  (()))   => unbalanced
  ```

#### 4. isPalindrome

Write a function, `isPalindrome`, that takes a string input and determines if the input is a palindrome (the input is identical in reverse).

  Examples:
  ```
  'abcba'   => palindrome
  'abcde'   => not a palindrome
  '12321'   => palindrome
  '12345'   => not a palindrome
  ```

#### 5. decimalToBinary

Write a function, `decimalToBinary`, that takes an integer input and returns its binary representation as a string of digits. Do not use any methods that convert numbers to binary (such as `num.toString(2)`)

  Examples:
  ```
  0   => 0
  1   => 1
  2   => 10
  3   => 11
  4   => 100
  5   => 101
  6   => 110
  7   => 111
  8   => 1000
  ```

## Leet Code Challenges

For those looking for an additional challenge, check out these leet code problems related to stacks and queues:

### Stack

- [baseball-game](https://leetcode.com/problems/baseball-game/description)
- [palindrome-linked-list](https://leetcode.com/problems/palindrome-linked-list/description/)
- [min-stack](https://leetcode.com/problems/min-stack/description/)

### Queue

- [num-of-students-unable-to-eat-lunch](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/)
