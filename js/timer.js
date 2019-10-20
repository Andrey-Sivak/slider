'use strict';

class Timer {

    constructor( callback, delay ) {
        this.timerId;
        this.start;
        this.callback = callback;
        this.delay = delay;
        this.remaining = this.delay;

        this.resume = this.resume.bind(this);
        this.pause = this.pause.bind(this);
        this.become = this.become.bind(this);
        this.begin = this.begin.bind(this);
    }

    resume() {
        this.start = new Date();
        this.timerId = setTimeout( () => {
            this.resume();
            this.callback();
        }, this.remaining);
    };

    pause() {
        clearTimeout(this.timerId);
        this.remaining -= new Date() - this.start;
    };

    become() {
        clearTimeout(this.timerId);
        this.remaining = this.delay;

        this.resume();
    }

    begin() {
        this.resume();
    }
}

export { Timer };