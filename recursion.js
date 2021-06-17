function findFactorialRecursive(number) {
  //code here
  //condition1 base case --> where to stop
  //condition2 recursive case --> where to recurse
  //condition3 return and return

    if(number>1){    
    let egg =findFactorialRecursive(number-1)
    number =egg*number
    }
  return number;
}

function findFactorialIterative(number) {
  //code here
  let answer=0
  while(number>1){
      holder=number-1
      answer+=number*holder
      number--
  }
  return answer;
}
//console.log(findFactorialRecursive(5))
//console.log(findFactorialIterative(5))


// Given a number N return the index value of the Fibonacci sequence, where the sequence is:gut 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3
//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
    //code here;
  }
  fibonacciIterative(3);
  
  function fibonacciRecursive(n) {
    //code here;
  }
  
  fibonacciRecursive(3)