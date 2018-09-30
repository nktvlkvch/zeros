module.exports = function getZerosCount(number) {
	//1 2 3 4 5 6 7 8 9     2,5 4,5 6,5 8,5 
  // your implementation
var result=0;
while (number>0) {
	number=Math.floor(number/5);
	result+=number;
}
return result;
}

