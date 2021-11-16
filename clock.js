/*
* Clock 
*/


/*
// setTimeout är inte BLOCKERANDE utan den startas och så körs resterande kod
setTimeout( () => {
    console.log("Timeout")
}, 5000);


let tick = 0;
setInterval( () => {
    tick++;
    console.log("tick", tick);
}, 1000);

console.log("ticker started");

setInterval( () => {
    console.log("Intervall")
}, 1000);
*/

/*
const now = new Date(); //ger oss tid och datum när koden körs

now.getFullYear();
now.getDate();
now.getMonth();
now.getMonth() + 1;
now.getHours();
now.getMinutes();
now.getSeconds();

// stänga intervall
clearInterval(); // inom parantesen skickas namnet på funktionen med som ska avslutas
*/

const hourEl = document.querySelector('#hour');
const minuteEl = document.querySelector('#minute');
const secondEl = document.querySelector('#second');

const now = () => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    // gör att det läggs till en nolla om talet är mellen 0-9
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    hourEl.innerText = `${hour}`;
    minuteEl.innerText = `${minute}`;
    secondEl.innerText = `${second}`;     
};

setInterval("now()", 1000);

/*
let tick = 0;
setInterval( () => {
    tick++;
    console.log("second", tick);
}, 1000);


/*
// setTimeout är inte BLOCKERANDE utan den startas och så körs resterande kod
setTimeout( () => {
    console.log("Timeout")
}, 5000);


console.log("ticker started");

setInterval( () => {
    console.log("Intervall")
}, 1000);


// stänga intervall
clearInterval(); // inom parantesen skickas namnet på funktionen med som ska avslutas

*/