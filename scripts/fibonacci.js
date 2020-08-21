
function fibonacciUpTo(n){
    if(n > 0){
        if(n == 1) return "1";
        else if(n == 2) return "1 1";
        else{
            out = "1 1 ";
            a1 = 1;
            a2 = 1;
            for(x = 3; x <= n; x++){
                sum = a1 + a2;
                a1 = a2;
                a2 = sum;
                out += sum + " ";
            }
            return out.trim();
        }
    }
    else{
        return "Invalid Input";
    }
}

function displayFib(){
    fib_input = document.getElementById("n_input_fib").value;
    fib_n = Number(fib_input);
    fib_output = document.getElementById("fib_output");
    fib_output.value = fibonacciUpTo(fib_n);
}