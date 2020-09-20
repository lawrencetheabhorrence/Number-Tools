function sumOfDigitsSquared(n){
	out = 0;
	while (n > 0){
		out += pow(n % 10, 2);
		n = Math.floor(n / 10);
	}
	return out;
}

function isHappy(x){
	seennumbers = [];
	while ((x > 1) && (seennumbers.indexOf(x) == -1)){
		seennumbers.push(x);
		x = sumOfDigitsSquared(x);
	}
	return (number == 1);
}

function happy_button(){
	n = parseInt(document.getElementById("n_happy_input").value);
	out = document.getElementById("happy_output");
	happies = "";
	for(x = 1; x <= n; x++){
		if(isHappy(x)) happies += x + " ";
	}
	out.value = happies;
}