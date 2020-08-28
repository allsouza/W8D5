// class Clock {
//     constructor() {
//         const time = new Date();
//         this.hours = time.getHours();
//         this.minutes = time.getMinutes();
//         this.seconds = time.getSeconds();
//         this.printTime();
//         const clock = this;
//         setInterval(this._tick, 1000);
//     }

//     printTime(){
//         console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
//     }

//     _tick(){
//         clock.seconds++;
//         if (clock.seconds === 60) {
//             clock.seconds = 0;
//             clock.minutes++;
//             if (clock.minutes === 60) {
//                 clock.minutes = 0;
//                 clock.hours++;
//                 if(clock.hours === 24){
//                     clock.hours = 0;
//                 }
//             }
//         }
//         clock.printTime();
//     }
// }

// const clock = new Clock();



class Clock {
    constructor() {
        const time = new Date();
        this.hours = time.getHours();
        this.minutes = time.getMinutes();
        this.seconds = time.getSeconds();
        this.printTime();
        // const clock = this;
        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
        this.seconds++;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours++;
                if (this.hours === 24) {
                    this.hours = 0;
                }
            }
        }
        this.printTime();
    }
}

const clock = new Clock();