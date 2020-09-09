//quarter = 25 cents
//dime = 10 cents
//nickel = 5 cents
//penny = 1 cents


function changeDenom(amount, cost){
    if (cost > amount) return "Pay more you cheapskate"
    change = (amount - cost) * 100;
    coins = [0, 0, 0, 0, 0];
    values = [100, 25, 10, 5, 1];
    changeHelper(coins, values, change);
    return "Bills: " + coins[0] + "\tQuarters: " + coins[1] + "\nDimes: " + coins[2] +"\tNickels: " + coins[3] + "\tPennies: " + coins[4];
}

function changeHelper(coins, values, fractional){
    for(i = 0; i < coins.length; i++){
        coins[i] = Math.floor(fractional/(values[i]));
        fractional = fractional - (coins[i]*values[i]);
    }
}

function change_button(){
    amount = document.getElementById("paid_input").value;
    cost = document.getElementById("price_input").value;
    output = document.getElementById("change_output");
    output.value = changeDenom(amount, cost);
}