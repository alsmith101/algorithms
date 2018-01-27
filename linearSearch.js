

function linearSearch(value){

  A = [];
  
  while (i<20){
    
    A.push(Math.floor(Math.random()*20));
    
    i++
  }
  
  console.log(A);
  
  var found = false;
  
  for(i=0; i<A.length; i++) {
    
    if(A[i] === value) {
      
      console.log(i);
      found = true;
      break;
    }
    
    if(i===A.length-1) {
      
      A.push(value);
      break;
      
    }
  }
  console.log(A);
}
