function getSecondLargest(nums) {
   let maxArrayNum=Math.max(...nums);
   const reducedArray=nums.filter((I)=> I!==maxArrayNum);
   maxArrayNum= Math.max(...reducedArray);
   return maxArrayNum;
}