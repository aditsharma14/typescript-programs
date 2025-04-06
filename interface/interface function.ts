interface MathOperation {
    (x: number, y: number): number;
  }
  
  // Usage
  const addition: MathOperation = (a, b) => a + b;
  const subtract: MathOperation = (a, b) => a - b;
  
  console.log(addition(5, 3));
  console.log(subtract(7, 2));