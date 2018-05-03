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
					<tr>
						<td>ID: ${user.id}</td>
						<td>Name: ${user.name}</td>
					</tr>
				`;
			});

			response.innerHTML = `<table>${output}</table>`;
		} else if (xhr.status === 200) {
			response.innerHTML = `<h1>${xhr.responseText}</h1>`;
		}
	};

	xhr.send(`name=${txtName.value}`);

	// clear textbox
	txtName.value = "";
	txtName.focus();
});
