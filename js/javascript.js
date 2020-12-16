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
if (document.getElementById('cn').value.length <10) {
	errormessager+="Enter 11 numbers \n";
}
if (document.getElementById('ea').value =="") {
	errormessager+="Enter email Address \n";
}
if (document.getElementById('user').value =="") {
	errormessager+="Enter User Name \n";
}
if (document.getElementById('pass').value =="") {
	errormessager+="Enter password \n";
}
if (document.getElementById('pass').value.length <5) {
	errormessager+="Password must be greater than 5 \n";
}
if (document.getElementById('pass').value !=document.getElementById('Cpass').value) {
	errormessager+="atleast have the same password \n";
}

if (errormessager != "") {
	alert(errormessager);
	return false;
}
	}	
