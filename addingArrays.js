//Adding the integers in two flat arrays together 

function addingIntegers(arr1, arr2) {
  
  var arr3=[];
  var j=0;
  var i=0;
  
  while(j<arr2.length & i<arr1.length){
    
    var sum = arr1[i]+arr2[j];
    arr3.push(sum);
    
    i++;
    j++;
    
  }
  
  if(i < arr1.length){
    
    for(i=i;i<arr1.length;i++){
      
      arr3.push(arr1[i]);
    }
    
  }
  
  if(j < arr2.length){
    
    for(j=j;j<arr2.length;j++){
      
      arr3.push(arr2[j]);
    }
    
  }
  
console.log(arr3);
console.log(i);
console.log(j);
}

