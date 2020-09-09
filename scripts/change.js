//quarter = 25 cents
//dime = 10 cents
//nickel = 5 cents
//penny = 1 cents

function changeDenom(amount, cost){
    change = (amount - cost) * 100;
    coins = []
    values = [100, 25, 10, 5, 1];
    changeHelper(coins, change, values, 0);
    return "Bills: " + coins[0] + "\tQuarters: " + coins[1] + "\nDimes: " + coins[2] +"\tNickels: " + coins[3] + "\tPennies: " + coins[4];
}

function changeHelper(coins, fractional, values, index){
    if (index === values.length) return;
    amount = Math.floor(fractional/values[index]);
    coins.push(amount)
    changeHelper(coind, fractional - values[index]*amount, index++);
}

function change_button(){
    amount = parseInt(document.getElementById("paid_input").value);
    cost = parseInt(document.getElementById("price_input").value);
    output = document.getElementById("change_output");
    output.value = changeDenom(amount, cost);
}