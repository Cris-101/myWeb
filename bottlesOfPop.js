var word = "bottles"

var count = 99;

while (count > 0)
{
	document.write(count + " " + word + " of pop on the wall, ");
	document.write(count + " " + word + " of pop,");
	document.write(" Take one down, pass it around, ");
	count = count - 1; 

	if(count > 0)
	{
		document.write(count + " " + word +" of pop on the wall. ");
	}
	else
	{
		document.write("No more" + word + " of pop on the wall ");
	}
	
}