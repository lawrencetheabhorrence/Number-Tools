function isHappyNumber(n, k, count){
	if (k == 1) return true;
	if (n == k && count > 0) return false;
	return isHappyNumber(n, sumOfDigitsSquared(k), count++);
}

out = [1];

function happyNumberSeq(n, k, count){
	if (!isHappyNumber(n)) return [];
	if(k == 1) return out;
	else{
		out.push(k);
		happyNumberSeq(n, sumOfDigitsSquared(k), count++);
	}
}

function sumOfDigitsSquared(n){
	n = n.toString.split('');
	out = 0;
	for(x = 0; x < n.length(); x++) out += Integer.parseInt(n) * (10 ^ (n.length() - x));
}

function happy_button(){
	happy_numbers = [];
	n = document.getElementById("n_happy_input").value;
	for(x = 1; x <= n; x++){
		if(happy_numbers.length() == n) break;
		if(happy_numbers.indexOf(x) != -1) continue;
		if(isHappyNumber(x)){
			happy_numbers.concat(happyNumberSeq);
		}
	}

	out = document.getElementById("happy_output");
	out.value = "The first " + n + " happy numbers are " + happy_numbers.out;
}