console.log(1);
console.log(2);
console.log(3);

// setTimeout är inte BLOCKERANDE utan den startas och så körs resterande kod
setTimeout( () => {
    console.log("Timeout")
}, 5000);

/*
let tick = 0;
setInterval( () => {
    tick++;
    console.log("tick", tick);
}, 1000);

console.log("ticker started");


/*
setInterval( () => {
    console.log("Intervall")
}, 1000);
*/