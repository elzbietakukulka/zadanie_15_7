//Pzekształcone na składnię ES6

class Stopwatch extends React.Component {
    constructor(props) {
    	super(props);
    	this.state = {
	        running: false,
	        display: display,
	        reset(), 
	        print(this.times),
	    }
    }


    reset = () => {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
    }

    print = () => {
        this.display.innerText = this.format(this.times);
	}

	format = (times) => {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	}

	start = () => {
	    if (!this.running) {
	        this.running = true;
	        this.watch = setInterval(() => this.step(), 10);
	    }
	}

	step = () => {
	    if (!this.running) return;
	    this.calculate();
	    this.print();
	}

	calculate = () => {
	    this.times.miliseconds += 1;
	    if (this.times.miliseconds >= 100) {
	        this.times.seconds += 1;
	        this.times.miliseconds = 0;
	    }
	    if (this.times.seconds >= 60) {
	        this.times.minutes += 1;
	        this.times.seconds = 0;
	    }
	}

	results = (times) => {
			let elementLi = document.createElement('li');
			let resultsEl = document.querySelector('.results');
					elementLi.innerHTML = `${this.format(this.times)}`;
					resultsEl.appendChild(elementLi);
	}


	stop = () => {
	    this.running = false;
	    clearInterval(this.watch);
	    this.results(this.times);
	    this.reset();
	}
}

 pad0 = (value) => {
	    let result = value.toString();
	    if (result.length < 2) {
	        result = '0' + result;
	    }
	    return result;
	};
 

const stopwatch = new Stopwatch(document.querySelector('.stopwatch'));

//Add event listeners
let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => stopwatch.reset());


//-------------------------Zadanie 15.6-----------------------
class Stopwatch {
    constructor(display) {
        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
    }

    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
    }

    print() {
        this.display.innerText = this.format(this.times);
	}

	format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	}

	start() {
	    if (!this.running) {
	        this.running = true;
	        this.watch = setInterval(() => this.step(), 10);
	    }
	}

	step() {
	    if (!this.running) return;
	    this.calculate();
	    this.print();
	}

	calculate() {
	    this.times.miliseconds += 1;
	    if (this.times.miliseconds >= 100) {
	        this.times.seconds += 1;
	        this.times.miliseconds = 0;
	    }
	    if (this.times.seconds >= 60) {
	        this.times.minutes += 1;
	        this.times.seconds = 0;
	    }
	}

	results(times){
			let elementLi = document.createElement('li');
			let resultsEl = document.querySelector('.results');
					elementLi.innerHTML = `${this.format(this.times)}`;
					resultsEl.appendChild(elementLi);
	}


	stop() {
	    this.running = false;
	    clearInterval(this.watch);
	    this.results(this.times);
	    this.reset();
	}
}

function pad0(value) {
	    let result = value.toString();
	    if (result.length < 2) {
	        result = '0' + result;
	    }
	    return result;
	};
 

const stopwatch = new Stopwatch(document.querySelector('.stopwatch'));

//Add event listeners
let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => stopwatch.reset());