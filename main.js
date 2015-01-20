/*
var phone=prompt("This is less sketchy than it sounds: please enter your phone number WITH dashes.  I promise, it will not be used for anything other than a validation test!!");
if (phone.charAt(3) && phone.charAt(7) ==="-") {
			alert ("correct");
} 
else
	{ alert("phone working but messed up");
}

var birthdate=prompt("Now enter birthdate in the format DD/MM/YY");
if (birthdate.charAt(2) && birthdate.charAt(5) === "/") {
	alert("correct");
} 
else { 
	alert(" bdate working but messed up");
}

*/
var postalcode=prompt("US postal code please. OK formats are NNNNN or NNNNN-NNNN only. Sorry rest of the world, I'm no that advanced");
// console.log(postalcode.substring(6,10));
var postalLength=postalcode.length
if (!isNaN(postalcode) && postalLength ===5 ) {
	alert("number correct");
	alert(postalLength);
} 
else if (postalLength ===10 && postalcode.charAt(5) ==="-" && !isNaN(postalcode.substring(0,5)) && !isNaN(postalcode.substring(6,10)) ) {
		alert("10 digit format correct");
}
else {
	alert("postalcode is messed up");
}


// var statecode=prompt("Give me your 2 digit state code - again, US only.");

