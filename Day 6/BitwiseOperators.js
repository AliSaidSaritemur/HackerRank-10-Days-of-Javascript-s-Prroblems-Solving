function getMaxLessThanK(n,k){
 let maxAnd=0;
 for(let i =1;i<=n;i++){
     for(let j=2;j<n;j++){  
         if(i==j)
         continue;   
        let andValue=i&j;
       maxAnd=andValue>maxAnd&&andValue<k ? andValue:maxAnd;
     }
 }
 return maxAnd ;
}