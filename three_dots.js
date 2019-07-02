// Created on Tue Apr 28, 2019
// Adrian Oprea: What do the three dots (...) mean in JavaScript?
// https://oprea.rocks/blog/what-do-the-three-dots-mean-in-javascript/
const adrian = {
  fullName: 'Adrian Oprea',
  occupation: 'Software developer',
  age: 31,
  website: 'https://oprea.rocks'
};

const bill = {
  ...adrian,
  fullName: 'Bill Gates',
  website: 'https://microsoft.com'
};

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [ ...numbers1, 1, 2, 6,7,8];
// this will be [1, 2, 3, 4, 5, 1, 2, 6, 7, 8]


function sum(...numbers) {
  return numbers.reduce((accumulator, current) => {
    return accumulator += current;
  })
}
 
sum(1, 2) // 3
sum(1, 2, 3, 4, 5) // 15
