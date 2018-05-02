const formGreet = document.querySelector("#frm-greet");
const txtUser = document.querySelector("#txt-user");
const response = document.querySelector("#ajax_response");

formGreet.addEventListener("submit", (e) => {
	e.preventDefault();

	const xhr = new XMLHttpRequest();

	xhr.open("POST", "greet_user.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	xhr.onload = () => {
		if (xhr.status === 200) {
			response.innerHTML += `${xhr.responseText}<br>`;
		}
	};

	xhr.send(`name=${txtUser.value}`);

	// clear textbox
	txtUser.value = "";
	txtUser.focus();
});
