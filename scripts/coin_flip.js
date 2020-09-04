function isHeads(){
    n = Math.random();
    if (n > 0.5) return true;
    return false;
}

heads = 0;
tails = 0;

function coin_flip(){
    output = document.getElementById("coin_flip_output");

    out = "";
    if(isHeads()){
        heads++;
        out += "Heads \n";
    }
    else{
        tails++;
        out += "Tails \n"
    }

    out += "Tails: " + tails + "  Heads: " + heads;
    output.value = out;
}