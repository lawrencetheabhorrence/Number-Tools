function sumOfDigitsSq(n){
	pow = 1;
	out = 0;
	while(Math.floor(n / Math.pow(10, pow)) > 0){
		out += Math.pow(Math.floor(n / Math.pow(10, pow)), 2);
	}
	return out;
}

function isHappy(n){
	seens = [];
	while(!seens.includes(n)){
		if(n == 1) return true;
		else n = sumOfDigitsSq(n);
	}
	return false;
}