
// Phone section - all good, checking format but not for number
var phone=prompt("This is less sketchy than it sounds: please enter your phone number WITH dashes.  I promise, it will not be used for anything other than a validation test!!");
if (phone.charAt(3) && phone.charAt(7) ==="-") {
			alert ("correct, please go on");
} 
else
	{ alert("phone working but messed up - start over");
}

// Birthdate section - all good, checking format but not number
var birthdate=prompt("Now enter birthdate in the format DD/MM/YY");
if (birthdate.charAt(2) && birthdate.charAt(5) === "/") {
	alert("correct, please go on");
} 
else { 
	alert(" bdate working but messed up - start over");
}

// Postalcode - all good, checking format and number
var postalcode=prompt("US postal code please. OK formats are NNNNN or NNNNN-NNNN only. Sorry rest of the world, I'm no that advanced");
// console.log(postalcode.substring(6,10));
var postalLength=postalcode.length
if (!isNaN(postalcode) && postalLength ===5 ) {
	alert("number correct, please go on");
} 
else if (postalLength ===10 && postalcode.charAt(5) ==="-" && !isNaN(postalcode.substring(0,5)) && !isNaN(postalcode.substring(6,10)) ) {
		alert("10 digit format correct, please go on");
}
else {
	alert("postalcode is messed up - start over");
}

// Statecode - all good
var statecode=prompt("Herein lies your 2-digit ALLCAPS state code.");
console.log(statecode.toUpperCase());
 if (isNaN(statecode) && statecode.length===2 && statecode===statecode.toUpperCase()) {
 	alert("statecode correct, please go on");
 } 	
 else {
 	alert("statecode messed up - start over");
 }


// Married section -- all good
 var married=prompt("Are you married, you sexy thing?")
 if (married.match(/yes/gi) || married.match(/no/gi)  ) {
 	alert("married working; you're done, you awesome person, you!")
 } else {
 	alert("married is messed up - start over")
 }

