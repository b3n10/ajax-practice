const formGreet = document.querySelector("#frm-save");
const txtName = document.querySelector("#txt-name");
const response = document.querySelector("#ajax_response");

formGreet.addEventListener("submit", (e) => {
	e.preventDefault();

	const xhr = new XMLHttpRequest();

	xhr.open("POST", "add_view_user.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	xhr.onload = () => {
		if (xhr.status === 200 && xhr.responseText != "No name given.") {
			const users = JSON.parse(xhr.responseText);
			let output = "";

			users.forEach(user => {
				output += `
					<ul>
						<li>ID: ${user.id}</li>
						<li>Name: ${user.name}</li>
					</ul>
				`;
			});

			response.innerHTML = output;
		} else if (xhr.status === 200) {
			response.innerHTML = xhr.responseText;
		}
	};

	xhr.send(`name=${txtName.value}`);

	// clear textbox
	txtName.value = "";
	txtName.focus();
});
