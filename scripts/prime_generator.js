primes = [2];

function euclid_prime(){
    i = 1;
    for(x of primes){
        i *= x;
    }
    i++;
    primes.push(i);
}

function prime_gen_button(){
    out = document.getElementById("primegen_output");
    out.value = primes[primes.length-1];
    euclid_prime();
}