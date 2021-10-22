const rect = require("./rectangle");

function solveRect(l, b) {
  console.log("Solvingfor rectangle whith l=" + l + " and b=" + b);
  rect(l, b, (err, rect) => {
    if (err) {
      return console.log("Error: " + err.message);
    }
    console.log("The area of the rectangle is " + rect.area());
    console.log("The perimeter of the rectangle is " + rect.perimeter());
  });
  console.log("This statement is after the call to rect()")
}
solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
