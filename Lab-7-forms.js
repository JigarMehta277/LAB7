/* LAB 8 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)


window.onload =function() {
	var formHandle =document.forms.form_ship;

	var message=document.getElementById("thanks_msg");
	console.log(formHandle);

	formHandle.onsubmit =processForm;

	function processForm() {

		var nameValue = formHandle.f_Name.value;

		var name=formHandle.f_Name;
		var customerID=formHandle.f_Id.value;
		var customer=formHandle.f_Id;
		var postal=formHandle.f_pc.value;
		var postalCode=formHandle.f_pc;
		var type = formHandle.in_Speed.value;
		var currency=formHandle.f_speed.value;
		
		var test=type.options[type.selectedIndex].text;
		if(nameValue==="") {
			name.style.background = "red";
			name.focus();
			return false;
		}

		if(customerID==="") {
			customer.style.background = "red";
			customer.focus();
			return false;
		}

		if(postal==="") {
			postalCode.style.background = "red";
			postalCode.focus();
			return false;
		}
		
		
		
		formHandle.style.display="none";
		message.style.display="block";

		message.innerHTML = "Thank you " +nameValue+ "(Customer # " +customerID+ " )  for your purchase. Your package will be sent by " +test+ " to " +postal+ " .  Cost of shipping will be $"+currency+" . ";

		return false;
	}
}







/*var shipInfo = {
	cid: 0,
	name: "",
	pc: "",
	speed: "",
	cost: 0
};*/



