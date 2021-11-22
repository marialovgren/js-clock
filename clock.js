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

const zeropad = num => {

	if (num < 10) {
		return "0" + num;
	}
	return num;

	/*
	return (num < 10)
		? "0" + num
		: num;
	*/
}

const getAndUpdateClock = () => {
	const now = new Date(); // gets current timestamp when this line was executed

	// update DOM clock
	hourEl.innerText = zeropad(now.getHours());
	minuteEl.innerText = zeropad(now.getMinutes());
	secondEl.innerText = zeropad(now.getSeconds());
}


setInterval(() => {

	// do something every second
	getAndUpdateClock();

}, 1000);


// set initial time
getAndUpdateClock();