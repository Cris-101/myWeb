//the facky variable is brought from the thingamajig function and it is assigned to the num variable which then
// goes throught the while loop if its greater than zero it displays clunk
// everytime it goes through the while loop it subtracts one until it becomes zero
// the num variable is basicaly how many times the word clunk is going to be displayed
function clunk(times){
	var num = times;
	while(num > 0) {
		display("clunk")
		num = num - 1;
	}
}

//The function checks the size which comes from the while loop from 1 - 7 
//then it makes a desicion with the if and else statements. if the size is equal to zero
//it displays "clanck" once, same goes for if the size is equal to one it displays "thunk" once.
//but when it gets to the else statement its different. if the size is greater than one it multiplies 
// the facky variable with the size and subtracting it by one everytime it goes through until it reaches 1. 
//When the size reaches 1, it grabs the new facky value and it gets called into the clunk function
//to see how many times the word "clunk" needs to be displayed.
function thingamajig(size) {
	var facky = 1;
	clunkCounter = 0;
	if(size == 0) {
		display("clanck");
	} else if(size == 1) {
		display("thunk");
	} else {
		while(size > 1) {
			facky = facky * size;
			size = size - 1;
		}
		clunk(facky)
	}
}
// this function is use to display the output by putting in its own line  
function display(output) {
	console.log(output);
	document.write(output);
	document.write("<br>");
	clunkCounter = clunkCounter + 1;
}

clunkCounter = 0; 
var number = 0;

 while(number <= 7)
 {
	thingamajig(number);
	number += 1;
	console.log(clunkCounter);
	document.write(clunkCounter);
	document.write("<br>");
	

 }



	