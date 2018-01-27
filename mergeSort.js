
function mergeSort(arr) {
  
  if (arr.length === 1) {
    
    return arr;
    
  }
  
  var middle = Math.floor(arr.length/2);
  var l = arr.slice(0,middle);
  var r = arr.slice(middle);
      
  
  l = mergeSort(l);
  r = mergeSort(r);
  
  return merge(l,r);
  
}

console.log(mergeSort([2,9,1,5,3231,43,36,23,865,234,12,25,898]));
  
function merge(l,r) {
  
  var result = [];
  var indexLeft = 0;
  var indexRight= 0;
  while(l.length > indexLeft & r.length > indexRight ) {
  
    if (l[indexLeft] < r[indexRight]) {
    
    result.push(l[indexLeft]);
    indexLeft++;
    }
    else {
    
    result.push(r[indexRight]);
    indexRight++;
    }
  }
    
    return result.concat(l.slice(indexLeft)).concat(r.slice(indexRight));
    
}
