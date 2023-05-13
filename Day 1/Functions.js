function factorial(num){
    
    let tempNum=Number(num)+1;
    let factorielNum=1;
    while(tempNum-->2)
    { 
        factorielNum=factorielNum*tempNum;
    }  
    return factorielNum;
}