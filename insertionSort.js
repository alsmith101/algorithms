

function insertionSort(arr){
  
  for(i=1; i<arr.length; i++){
    
    var value = arr[i];
    var j = (i - 1);
    
    while(arr[j] > value & j >= 0){
      
      arr[j+1] = arr[j];
      arr[j]=value;
      
      j--;
      
    }
  console.log(arr);  
  }
  
}
insertionSort([8,10,5,2,4,7,9,0,1,3,6])
