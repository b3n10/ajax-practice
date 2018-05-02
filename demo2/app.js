const getUsers = document.getElementById("get_users"),
	response = document.getElementById("ajax_response");

getUsers.addEventListener("click", () => {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.github.com/users", true);

	xhr.onload = () => {
		if (xhr.status === 200) {
			const users = JSON.parse(xhr.responseText);
			let output = "";

			users.forEach(user => {
				output += `
					<div class='get-users'>
						<img src=${user.avatar_url}>
						<ul>
							<li>ID: ${user.id}</li>
							<li>Login: ${user.login}</li>
						</ul>
					</div>
					`;
			});

			response.innerHTML = output;
		}
	};

	xhr.send();
});
