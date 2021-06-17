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
    if(n==0)return 0
    if(n==1)return 1
    let fir=0
    let sec=1
    if(n>1){
        while(n>1){
            let hold =sec
            sec =fir+sec
            fir =hold
            n--
        }
    }
    return sec
  }

  function fibonacciRecursive(n) {
    if(n==0){
        return 0
    }else if(n==1){
        return 1
    }else if(n>1){
        return fibonacciRecursive(n-2)+fibonacciRecursive(n-1)
    }
  }
  console.log(fibonacciIterative(6));
  console.log(fibonacciRecursive(6))