function validation() {
	let form = document.getElementById("form");
	let email = document.getElementById("email").value;
	let text = document.getElementById("text");
	console.log(email)

	let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	// let pattern = /[a-z]{2,3}$/;

	if (email.match(pattern)) {
		form.classList.add("valid");
		form.classList.remove("invalid");
		text.innerHTML = "Your Email Address in Valid.";
		text.style.color = "#00ff00";
	} 

	else {
		form.classList.add("invalid")
		form.classList.remove("valid");
		text.innerHTML = "Please Enter Valid Email Address.";
		text.style.color = "#ff0000";
	}

	if (email == "") {
		form.classList.remove("invalid")
		form.classList.remove("valid");
		text.innerHTML = "";
	}
}