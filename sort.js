const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

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
  
  let numbersCopy = numbers.map((x) => x);
  const answer = mergeSort(numbersCopy);
  console.log('merge is ',answer);


//selectionSort(numbers);
//console.log(numbers);
bubbleSort(numbers);
console.log('buble ',numbers);
//insertionSort(nu,mbers);
//console.log(numbers);