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

// The function below is not necessary. Only for experiment.
function printMessage() {
    alert("This message has been imorted from hard-worker.js!");
    console.log("This message has been imorted from hard-worker.js!");
}

export { HardWorker, printMessage };