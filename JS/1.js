var	input1 = document.getElementById("input_1");
var input2 = document.getElementById("input_2");
var buttonPlus = document.getElementById("plusButton");
var buttonMinus = document.getElementById("minusButton");
var buttonMultiply = document.getElementById("multiplyButton");
var buttonDivide = document.getElementById("divideButton");
var result = document.getElementById("output");

buttonPlus.onclick = function()
{
	var a = parseInt (input1.value);
	var b = parseInt (input2.value);
	var output = a + b;

	result.value = output;

}

buttonMinus.onclick = function()
{
	var a = parseInt (input1.value);
	var b = parseInt (input2.value);
	var output = a - b;

	result.value = output;
}

buttonMultiply.onclick = function()
{
	var a = parseInt (input1.value);
	var b = parseInt (input2.value);
	var output = a * b;

	result.value = output;
}

buttonDivide.onclick = function()
{
	var a = parseInt (input1.value);
	var b = parseInt (input2.value);
	var output = a / b;

	result.value = output;
}