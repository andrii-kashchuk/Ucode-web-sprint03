import { HardWorker, printMessage } from './modules/hard-worker.js';

let worker = new HardWorker;

worker.name = 'Bruce';
console.log(worker.name);
// Bruce

worker.age = 50;
worker.salary= 1500;
console.log(worker.toObject());
// Object { name: "Bruce", age: 50, salary: 1500 }

worker.name = 'Linda';
worker.age = 140;
console.log(worker.toObject());
// Object { name: "Linda", age: 50, salary: 1500 }


// below test from myself
worker.name = 'Andrey';
worker.age = 39;
worker.salary= 7500+'$';
console.log(worker.toObject());
// Object { name: "Andrey", age: 39, salary: 7500$ }

printMessage();