class Timer {
    constructor(title, delay, stopCount) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;

    }

    start() {
        let counter = this.stopCount;
        console.log(
            "Timer " + this.title + " started (delay=" + this.delay + ", stopCount=" + this.stopCount + ")"
        );
        // Timer Bleep started (delay=1000,  stopCount=5)
        let timerId = setInterval(() => {
            counter--;
            this.tick(this.title, counter);
        }, this.delay);
        this.stop(timerId);
    }

    tick(title, countDown) {
        console.log(`Timer ${title} Tick! | cycles left ${countDown}`);
        // Timer Bleep started (delay=1000,  stopCount=5)
    }

    stop(timerId) {
            setTimeout( () => {
                clearInterval(timerId);
                console.log(`Timer ${this.title} stopped`);
        }, this.stopCount * 1000);
    }

}

function runTimer(id, delay, counter) {
    return new Timer(id, delay, counter).start();
}


runTimer("Bleep", 1000, 5);
/*
Console output:
Timer Bleep started (delay=1000,  stopCount=5)
Timer Bleep Tick! | cycles left 4
Timer Bleep Tick! | cycles left 3
Timer Bleep Tick! | cycles left 2
Timer Bleep Tick! | cycles left 1
Timer Bleep Tick! | cycles left 0
Timer Bleep stopped
*/