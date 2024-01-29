const input="string to be reverse";

function reverse(input){
    const reverseString=input.split("").reverse().join("");
    console.log(reverseString);
}

setTimeout(reverse,2000,input);