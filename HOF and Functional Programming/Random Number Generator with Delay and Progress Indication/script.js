const delay = 3000;

let remainingtime = delay - 1000 ;

const countdownintervel = setInterval(() => {
    console.log(`generating random number in ${remainingtime} seconds...`);
    remainingtime -= 1000 ;
    if (remainingtime <= 0){
        clearInterval(countdownintervel)
    }
}, 1000);

setTimeout(() => {
    const randomnumber = Math.floor(Math.random() * 100)
    console.log(`Genrated number is = ${randomnumber}`);
}, delay);