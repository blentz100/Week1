/* Initial Variable Setup */
let itemPrice1 = 5;
let itemPrice2 = 10;

let moneyInWallet1 = 20;
let moneyInWallet2 = 50;

let numberOfFriends1 = 100;
let numberOfFriends2 = 160;

let age1 = 25;
let age2 = 80;

let firstName1 = "Mike";
let firstName2 = "Lisa";

let lastName1 = "Jones";
let lastName2 = "Smith";

let middleInitial1 = "K";
let middleInitial2 = "M";


/* Computed Variables */
let newMoneyInWallet1 = (moneyInWallet1 - itemPrice1);
let newMoneyInWallet2 = (moneyInWallet2 - itemPrice2);

let numFriendsEachYear1 = (numberOfFriends1 / age1);
let numFriendsEachYear2 = (numberOfFriends2 / age2);

let fullName1 = (firstName1 + " " + middleInitial1 + ". " + lastName1);
let fullName2 = (firstName2 + " " + middleInitial2 + ". " + lastName2);

/* Send output to console */
console.log('New amount of money in wallet1 after buying item1 is: $' + newMoneyInWallet1 );
console.log('New amount of money in wallet1 after buying item2 is: $' + newMoneyInWallet2 );

console.log('Number of friends made each year for person 1: ' + numFriendsEachYear1 + ' friends');
console.log('Number of friends made each year for person 2: ' + numFriendsEachYear2 + ' friends');

console.log('The full name of person 1 is: ' + fullName1);
console.log('The full name of person 2 is: ' + fullName2);

