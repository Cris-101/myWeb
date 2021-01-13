var word = "bottles"

var count = 99;

while (count > 0)
{
	document.write(count + " " + word + " of pop on the wall, ");
	document.write("<br>");
	document.write(count + " " + word + " of pop,");
	document.write("<br>");
	document.write(" Take one down, pass it around, ");
	document.write("<br>");
	count = count - 1; 

	if(count > 0)
	{
		document.write(count + " " + word +" of pop on the wall. ");
		document.write("<br>");
	}
	else
	{
		document.write("No more" + word + " of pop on the wall ");
		document.write("<br>");
	}
	
}
