// write tests here
const chai = require("chai");

const expect = chai.expect;
const index = require("../index");

describe("scoreCalculator()", function() {
  it("should return -1 if the array is empty", function() {
    expect(index([])).to.equal(-1);
  });

  it("should return a score based on radii", function() {
    let array = [1, 5, 11];
    expect(index(array)).to.equal(15);

    let array1 = [15, 20, 30];
    expect(index(array1)).to.equal(0);
  });

  it("should add 100 points to a score if all radii are less than 5", function() {
    let array = [1, 2, 1, 4, 4, 2];
    expect(index(array)).to.equal(160);
  });
});

describe("dumb edge cases", function() {
  it("should throw an error if argument is not an array", function() {
    let arg = "hello";

    expect(index.bind(null, arg)).to.throw("Argument passed is not an array.");
  });

  it("should return an error if a value in the array is less than 1 or more than 20", function() {
    let array = [-4, 3, 10];
    expect(index.bind(null, array)).to.throw(
      "Value in array is not between 1 and 20."
    );
  });
});
