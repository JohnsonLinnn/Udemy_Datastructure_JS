//const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers = [3, 7, 8, 5, 2, 1, 9, 5, 4];

function bubbleSort(array) {
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-1;j++){
            if(array[j]>array[j+1]){
                let hold=array[j]
                array[j]=array[j+1]
                array[j+1]=hold
            }
        }

    }
}
function selectionSort(array) {
    for(let i=0;i<array.length;i++){
        let hold=array[i]
        let index =0
        for(let j=i+1;j<array.length;j++){
            
            if(hold>array[j]){
                hold=array[j]
                index=j
            }
        }
        if(index!=0){
            array.splice(index,1)
            array.splice(i,0,hold)
        }
        
        
    }
}
function insertionSort(array) {
    for(let i=1;i<array.length;i++){
        if(array[i]<array[i]-1){
            for(let j=0;j<i;j++){
                if(array[i]<array[j]){
                    array.splice(i,1)
                    array.splice(j-1,0,array[i])
                }
            }
        }
    }
}
function mergeSort (array) {
    //console.log('array is',array)
    if (array.length === 1) {
      return array
    }else{
    // Split Array in into right and left
    let split=Math.floor(array.length/2)
    let left=[]
    for(let i=0;i<split;i++){
        left.push(array.shift())
    }
    let right=array
    
    return merge(
      mergeSort(left),
      mergeSort(right)
    )
    }
  }
  
  function merge(left, right){
    let len=left.length+right.length
    let hold=[]
    for(let i=0;i<len;i++){
        if(left[0]<=right[0]){
            hold.push(left.shift())
        }else if(left[0]>right[0]){
            hold.push(right.shift())
        }else if (right.length ==0){
            hold=hold.concat(left)
            i=len
        }else if(left.length ==0){
            hold=hold.concat(right)
            i=len
        }
    }
    //console.log('merge',hold)
    return hold
  }
  
  //let numbersCopy = numbers.map((x) => x);
  //const answer = mergeSort(numbersCopy);
  //console.log('merge is ',answer);


  //if the input array 
  function quickSort(array, left, right){
    console.log('this is modifiing' ,left , right)
    if(right-left>0){
        let righthold=right
        let lefthold=left
        while(left<right){

            if(array[left]>array[right]){
                let hold =array[left]
                array[left]=array[right-1]
                array[right-1]=array[right]
                array[right]=hold
                right=right-1
                
               
            }else{
                left=left+1
            }
        }
        console.log('after this modifed')
        console.log(array)

        quickSort(array,lefthold,left-1)

        quickSort(array,left+1,righthold)
    }
  }
  
  
  //Select first and last index as 2nd and 3rd parameters
  quickSort(numbers, 0, numbers.length - 1);
  console.log(numbers);



//selectionSort(numbers);
//console.log(numbers);
//bubbleSort(numbers);
//console.log('buble ',numbers);
//insertionSort(nu,mbers);
//console.log(numbers);

//#1 - Sort 10 schools around your house by distance:
//insertion
//->small dataset
//#2 - eBay sorts listings by the current Bid amount:
//counting or radix 
//-> fix integer
//#3 - Sport scores on ESPN
//Quick sort
//-->space compecity
//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
//Merge sort
//-->wired 

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
//insert

//#6 - Temperature Records for the past 50 years in Canada
//radix or counting -->
//quick

//#7 - Large user name database needs to be sorted. Data is very random.
//Merge 

//#8 - You want to teach sorting for the first time
//bubble or selection