import {EventEmitter} from 'events'

export class Door extends EventEmitter {
    constructor() {
        super();
    }

    ring() {
        setTimeout(() => {
            this.emit('open');
        }, 1000);
    };
}
