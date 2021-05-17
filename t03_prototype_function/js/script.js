String.prototype.removeDuplicates = function () {
    this.str = String;
    for (let i = 0; i < length.str; i ++) {
        if ( !(this[i] === " " && this[i - 1] === " ") ) {
            this.str += this[i];
        }
        this.str = this.str.split(' ');
        return str;
    }
}

let str = "Giant Spiders?   What’s next? Giant Snakes?";

console.log(str);
// Giant Spiders?   What’s next? Giant Snakes?

str = str.removeDuplicates();

console.log(str);
// Giant Spiders? What’s next? Snakes?

str = str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?

str = ". . . . ? . . . . . . . . . . . ";
console.log(str);
// . . . . ? . . . . . . . . . . .

str = str.removeDuplicates();
console.log(str);
// . ?

