const rect = {
  perimeter: (x, y) => 2 * (x + y),
  area: (x, y) => x * y,
};

function solveRect(l, b) {
  console.log("Solvingfor rectangle whith l=" + l + " and b=" + b);
  if (l <= 0 || b <= 0) {
    console.error("rectangle dimensions should be greater than zero");
  } else {
    console.log("The area of the rectangle is " + rect.area(l, b));
    console.log("The perimeter of the rectangle is " + rect.perimeter(l, b));
  }
}
solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
