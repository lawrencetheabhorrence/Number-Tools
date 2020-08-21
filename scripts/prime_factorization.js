function sieve(n){
    x = [2];
    for(k = 3; k <= n; k++){
        prime = true;
        for (i of x){
            if(k % i == 0){
                prime = false;
                break;
            }
        }
        if (prime) x.push(k);
    }
    console.log(x);
    return x;
}

function powerOfFactor(n, factor){
    x = 0;
    while(true){
        if(n % factor != 0) break;
        x++;
        n = n / factor;
    }
    return factor + "^" + x;
}

function listOfFactors(n){
    factors = sieve(n);
    for(x = 0; x < factors.length; x++){
        if(n % factors[x] != 0){
            factors.splice(x, 1);
            x--;
        } 
    }
    return factors;
}

function primeFactorization(n){
    factors = listOfFactors(n);
    out = "";
    for (x of factors){
        out += "("+powerOfFactor(n, x)+")";
    }
    out.trim();
    return out;
}

function primeFactorButton(){
    n = parseInt(document.getElementById("n_input_primefactor").value);
    document.getElementById("primefactor_output").value = primeFactorization(n);
}