function firstChar(text) {
  // your code here
	let newstr=text.trim();
	return newstr[0];
}

// Do not change the code below
//Uncomment the following line to show the prompt popup


const text = prompt("Enter text:");
alert(firstChar(text));
