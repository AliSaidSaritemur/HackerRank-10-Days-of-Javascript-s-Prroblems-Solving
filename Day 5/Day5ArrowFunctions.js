function modifyArray(nums) {
    let multipledList=[];
   nums.forEach((num)=>{
       multipledList.push(num%2==0?num*2:num*3);
   })
   return multipledList;  
}