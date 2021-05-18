class HardWorker {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    get age() {
        return this._age;
    }

    set age(val) {
        if (val < 1 || val > 100) {
            alert("According to the task the AGE has to be between 1 and 100!");
            return;
        }
        this._age = val;
    }

    get salary() {
        return this._salary;
    }

    set salary(_val) {
        if (_val < 100 || _val > 10000) {
            alert("The SALARY has to be between 100 and 10000!");
            return;
        } return this._salary = _val;
    }

    toObject() {
        return {
            name: this.name,
            age: this.age,
            salary: this.salary,
        };
    }
}

worker = new HardWorker;

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