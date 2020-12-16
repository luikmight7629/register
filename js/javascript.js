function checkblank(){
 var errormessager="";
if (document.getElementById('fname').value == "") {
	errormessager+="Please Enter your first name \n";
}
if (document.getElementById('mname').value == "") {
	errormessager+="Please Enter your middle name \n";
}
if (document.getElementById('lname').value == "") {
	errormessager+="Please Enter your lastname \n";
}
if (document.getElementById('cn').value == "") {
	errormessager+="Please Enter contact number \n";
}
if (document.getElementById('cn').value.length <=10 && document.getElementById('cn').value.length >=12) {
	errormessager+="Please EnterContact Number with 11 digits \n";
}
if (document.getElementById('ea').value =="") {
	errormessager+="Please Enter email Address \n";
}
if (document.getElementById('user').value =="") {
	errormessager+="Please Enter User Name \n";
}
if (document.getElementById('pass').value =="") {
	errormessager+=" Please Enter password \n";
}
if (document.getElementById('pass').value.length <5) {
	errormessager+="Please Password must be greater than 5 \n";
}
if (document.getElementById('pass').value !=document.getElementById('Cpass').value) {
	errormessager+="atleast have the same password \n";
}

if (errormessager != "") {
	alert(errormessager);
	return false;
}
	}	
