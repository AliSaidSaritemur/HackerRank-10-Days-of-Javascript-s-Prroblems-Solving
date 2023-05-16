function reverseString(s) {
  let message;
    try{
         message =s.split("").reverse().join("");
    }
    catch(err){
        message=`s.split is not a function \n${s}`;       
    }
 console.log(message);
}