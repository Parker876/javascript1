/**
 * @Author Parker Bolinger
 * @version 2.0
 * @summary project1
* */


var Prompt = require('readline-sync');
let bedroomamount, bathroomamount, garagesize, lotnumber, total;

function main() {
setlotnumber();
setbathroomamount();
setbedroomamount();
setgaragesize();
calcprice();
console.log("your Home plot lot" + lotnumber +  "will cost in total" + total + "dollars")
}

main();
        function setgaragesize() {
        garagesize = Number(Prompt.question("enter amount of car space garage"));}

        function setlotnumber() {
        lotnumber = Prompt.question("Enter your lot number");}

        function setbathroomamount () {
        bathroomamount = Number(Prompt.question("enter amount of bathrooms"));}

        function setbedroomamount () {
        bathroomamount = Number(Prompt.question("enter amount of bedrooms "));}

    function calcprice() {
        var garage_price = 6000;
        var bedroom_price = 17000;
        var bathroom_price = 12500;
        var base_price = 50000;
        total = (garagesize * garage_price) + (bedroom_price * bedroomamount) + (bathroom_price * bathroomamount)  + base_price;

    }








