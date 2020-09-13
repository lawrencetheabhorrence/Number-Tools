function fast_expo(n, k){
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (k % 2 == 0) return (n*n) * fast_expo(n, k-2);
    else return n * fast_expo(n, k-1);
}

function expo_button(){
    n = document.getElementById("n_expo_input").value;
    k = document.getElementById("k_expo_input").value;

    out = document.getElementById("expo_output");
    out.value = "Result: " + fast_expo(n, k);
}