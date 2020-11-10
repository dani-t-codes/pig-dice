import {addition, subtraction, multiplication, rollButtonPressed} from '../js/scripts.js';

describe('addition', () => {

  test('Should add the two numbers together', () => {
    const z = addition(1, 2);
    expect(z).toEqual(3); 
  });
  test("Should subtract the second number from the first", () => {
    const a = subtraction(6, 3);
    expect(a).toEqual(3);
  });
  test("Should multiply the two numbers", () => {
    const b = multiplication(2, 3);
    expect(b).toEqual(6);
  });
}); 

describe('rollButtonPressed()', () => {

  test("Should return value 1 if input is 1",  () => {
    const c = rollButtonPressed(1);
    expect(c).toEqual(1);
  });
});