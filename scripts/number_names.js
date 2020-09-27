//handles naming numbers up to 999
function number_name_chunk(n){
	if(n == 0) return "";

	ones = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
	tens = ["twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
	ten_set = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
	out = "";
	divisor = 1;

	while(Math.floor(n / divisor) != 0){
		digit = Math.floor(n / divisor) % 10;
		if(divisor == 1){
			if(digit > 0) out = ones[digit - 1] + out;
		}
		if(divisor == 10){
			if(digit == 1){
				first_digit = n % 10;
				out = ten_set[first_digit];
			}
			if(digit > 1) out = tens[digit - 2] + " " + out;
		}
		if(divisor == 100){
			out = ones[digit - 1] + " hundred " + out;
		}
		divisor *= 10;
	}

	return out;
}

//handles input up to 1 miliion
function number_names(n){
	if(n > Math.pow(10, 6)) return "enter a smaller number";
	if(n < 0) return "negative numbers not yet supported";
	if(n == Math.pow(10, 6)) return "one million";
	if(n == 0) return "zero";

	first_chunk = n % 1000;
	second_chunk = Math.floor(n / 1000);

	out = number_name_chunk(first_chunk);
	if(second_chunk > 0) out = number_name_chunk(second_chunk) + " thousand " + number_name_chunk(first_chunk);

	return out;
}

function name_button(){
	n = document.getElementById("number_name_input").value;
	out = document.getElementById("number_name_output");
	out.value = number_names(n);
}