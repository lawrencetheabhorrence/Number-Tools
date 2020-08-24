function confirmBinary(n){
    if(n.match(/[^0-1]+/) != null) return false;
    return true;
}

function bin_to_dec(n){
    if(confirmBinary(n)){
        digits = n.split('');
        out = 0;
        for(x = 0; x < digits.length; x++){
            out += Math.pow(2, digits.length - 1 - x)*parseInt(digits[x]); 
        }
        return out + "";
    }
    return "Not Binary";
}

function dec_to_bin(n){
    out = "";
    while(n != 0){
        if(n % 2 == 1){
            n--;
            out += "1";
        }
        else{
            out += "0";
        }
        n /= 2;
    }
    return out.split('').reverse().join('');
}

function d2b_button(){
    input = document.getElementById("bin_dec_input");
    output = document.getElementById("bin_dec_output");
    output.value = dec_to_bin(parseInt(input.value));
}

function b2d_button(){
    input = document.getElementById("bin_dec_input");
    output = document.getElementById("bin_dec_output");
    output.value = bin_to_dec(input.value);
}