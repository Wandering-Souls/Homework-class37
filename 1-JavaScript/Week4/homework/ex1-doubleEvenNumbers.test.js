/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week4#exercise-1-the-odd-ones-out

The `doubleEvenNumbers` function returns only the even numbers in the array 
passed as the `numbers` parameter and doubles them.

Let's rewrite it (or _refactor_ it, as experienced developers would call it):

- Using the `map` and `filter` functions, rewrite the function body of
`doubleEvenNumbers`.
------------------------------------------------------------------------------*/
// ! Function to be tested
function doubleEvenNumbers(numbers) {
  // TODO rewrite the function body using `map` and `filter`.
  const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
  });
  console.log(evenNumbers);

  const newNumbers = evenNumbers.map((evenNumber) => {
    return evenNumber * 2;
  });

  /*const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }*/
  return newNumbers;
}
console.log(doubleEvenNumbers([1, 2, 3, 4]));

// ! Unit test (using Jest)
test('doubleEvenNumbers should take the even numbers and double them', () => {
  const actual = doubleEvenNumbers([1, 2, 3, 4]);
  const expected = [4, 8];
  expect(actual).toEqual(expected);
  console.log(actual);
  console.log(expected);
});
