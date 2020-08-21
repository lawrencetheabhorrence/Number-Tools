
function factorialLoop(N){
    if(N > -1){
        if(N == 0 || N == 1) return 1;
        else{
            x = 1;
            for(i = N; i > 0; i--){
                x *= i;
            }
            return x;
        }
    }

    return null;
}

function factorialRecursion(N){
    if(N < 0) return null;
    if(N == 0 || N == 1) return 1;
    return N*factorialRecursion(N-1);
}

function button(loop){
    output = document.getElementById("factorial_output");
    input = parseInt(document.getElementById("n_input_factorial").value);
    
    start = Date.now()
    if(loop) out = factorialLoop(input);
    else out = factorialRecursion(input);
    end = Date.now();
    output.value = out + "\n Executed in " + (end-start) + " ms.";
}