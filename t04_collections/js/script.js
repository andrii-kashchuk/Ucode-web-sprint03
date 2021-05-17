/* guestList
    –contains names of invited guests–if you give it your name, it will tell you if you're on the list
    –if you ask who, or how many people are invited, it will not tell you
    –you can ask to remove someone by name off the list, but not everyone at once
*/

let guest1 = {name: "Andrey"};
let guest2 = {name: "Boris"};
let guest3 = {name: "Ivan"};
let guest4 = {name: "Lena"};
let guest5 = {name: "Ira"};

let guestList = new WeakMap();

guestList
        .set(guest1, "has invited.")
        .set(guest2, "has invited.")
        .set(guest3, "has invited.")
        .set(guest4, "has invited.")
        .set(guest5, "has invited.");

console.log( "Is there is present guest3 in the list of guests? => " + guestList.has (guest3) );
                                                                // check if there are present guest3 in list of guests
console.log(guestList.size); // do not show the length of the guest's list
console.log(guestList.keys); // do not show who is present in the guest's list
console.log(guestList.clear); // do not clear the guest's list
guestList.delete(guest1); // remove the guest1 from the guest's list
console.log("Checking if there is present the guest1 after deleting of it? => " + guestList.has(guest1) + "\n\n");
                                                                // checking if there is present the guest1
console.log("<------------------------- end of the guestList ------------------------->\n\n");

/* menu
    –contains a list of unique dishes and their prices
    –you can ask to name every available dish and its price, one after the other
*/

let menu = new Set();

let dish1 = {name: "Lobster", price: 5000};
let dish2 = {name: "Crab", price: 2500};
let dish3 = {name: "Omar", price: 4000};
let dish4 = {name: "Shark's soup", price: 5500};
let dish5 = {name: "Shrimp", price: 1500};

menu
    .add(dish1)
    .add(dish2)
    .add(dish3)
    .add(dish4)
    .add(dish5)

console.log("The size of menu is: " + menu.size + " dishes.\n\n");

console.log("Menu of the restaurant:\n");
menu.forEach( (dish) => {                                         // iteration of all elements of the menu
    console.log(dish.name + ": " + dish.price + " UAH");
});

console.log("\n\n<---------------------------- end of the menu --------------------------->\n\n");

/*
bankVault
    –contains safety deposit boxes, each with unique credentials and some contents
    –the only way to see the contents of a box, is to provide its correct credentials
*/

const vault1 = {password: "12345"};
const vault2 = {password: "qwerty"};
const vault3 = {password: "0000"};
const vault4 = {password: "1111"};
const vault5 = {password: "qazwsx"};

let bankVault = new WeakMap(
    [
    [vault1, {login: "log1"}],
    [vault2, {login: "log2"}],
    [vault3, {login: "log3"}],
    [vault4, {login: "log4"}],
    [vault5, {login: "log5"}]
    ]
);

console.log(bankVault.get(vault1));
console.log(bankVault.get(vault2));
console.log(bankVault.get(vault3));
console.log(bankVault.get(vault4));
console.log(bankVault.get(vault5));

console.log("\n\n<------------------------- end of the bankVault ------------------------->\n\n");

/*
coinCollection
    –contains various coins, all unique
    –if you want, you can see the entire collection
*/

let coinCollection = new WeakSet();

let coin = {value: 1};
let bitCoin = {value: 100};
let bitCoinDash = {value: 58};
let textCoin = {value: "text"};

coinCollection
    .add(coin)
    .add(bitCoin)
    .add(bitCoinDash)
    .add(textCoin);

console.log(coinCollection);

console.log("\n\n<---------------------- end of the coinCollection ----------------------->\n\n");