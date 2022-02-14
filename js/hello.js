function calc(operation, a, b) {
   if (operation == null || typeof a !== 'number' || typeof b !== 'number') {
      return 'Error';
   } else if (operation == 'divis' && b == 0) {
      return "Can't divide by zero";
   } 
   const operations = {
      sum: a + b,
      sub: a - b,
      multi: a * b,
      divis: a / b,
      remain: a % b,
      erect: a ** b, 
   }
   if(operation in operations) {
      return operations[operation];
   } return 'unknown operation';
} 

console.log(calc('summ', 2, 2));