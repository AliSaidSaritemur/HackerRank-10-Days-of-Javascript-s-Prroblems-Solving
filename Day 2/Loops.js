function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelArray=s.split("");
    
    for(let letter of vowelArray){
        if(vowels.includes(letter))
        console.log(letter);
    }
    for(let letter of vowelArray){
        if(!vowels.includes(letter))
        console.log(letter);
    }  
}