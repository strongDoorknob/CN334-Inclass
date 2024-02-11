function cn334_w01_calculation(num1, num2){
	let result = 1;
  if (num1 > 0 && num2 > 0) {
  	for (let i=0; i<=num2; i++) {
    	result += num1;
    }
  }
  return result;
}

var result_text = "Your result is: " + cn334_w01_calculation(2, 10);

console.log(result_text);