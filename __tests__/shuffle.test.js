const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  test('return an empty array', async () => {
    expect(shuffle()).toHaveLength(0)

    // I HAVE NO IDEA WHAT SHUFFLE IS OR HOW IT OPERATES OUTSIDE OF THE GOBBLEYGOOK
    // IN THE SHUFFLE.JS FILE, THEREFORE I DO NOT KNOW HOW TO TEST IT, 
    //BUT HERE'S A TEST ANYWAY

  });

  test('uninvoked return an array length of 1', async () => {
    expect(shuffle).toHaveLength(1)
  });

  //ALL I RECEIVE IS "FUNCTION: ANONYMOUS"... I honestly feel unprepared for this question.
  //That's my 2¢

});
