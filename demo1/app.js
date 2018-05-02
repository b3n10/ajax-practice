const btn = document.getElementById("btn-1"),
	response = document.getElementById("ajax_response-1"),
	getUser = document.getElementById("btn-2"),
	getUsers = document.getElementById("btn-3"),
	response2 = document.getElementById("ajax_response-2"),
	response3 = document.getElementById("ajax_response-3");

btn.addEventListener("click", () => {
	const xhr = new XMLHttpRequest();
	// open - type, URL/file, async
	// open is the "request" for "file.txt"
	xhr.open("GET", "file.txt", true);
	console.log("OPEN:", xhr.readyState);

	xhr.onprogress = () => {
		console.log("ONPROGRESS:", xhr.readyState);
		// will output 3 meaning "processing request"
	};

	xhr.onload = () => {
		console.log("ONLOAD:", xhr.readyState);
		// only output 4
		if (xhr.status === 200) {
			// 200: OK
			// 403: Forbidden
			// 404: Not Found
			// more info: https://stackoverflow.com/a/17561519/6353682
		}
	};

	xhr.onreadystatechange = () => {
		console.log("ONREADYSTATECHANGE:", xhr.readyState);
		// output from 2 to 4
		if (xhr.readyState === 4 && xhr.status === 200) {
			response.innerHTML = xhr.responseText;
			// readyState is from "client"
			// 4 means "request was completed and response was received"
			// status is from "server"
			// 200 means "server done sending back response"
		} else if (xhr.status == 404) {
			response.innerHTML = "FILE ERROR";
		}
	};

	// send the "request"
	xhr.send();
	console.log("SEND:", xhr.readyState);
});


getUser.addEventListener("click", () => {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "user.json", true);

	xhr.onload = () => {
		if (xhr.status === 200) {
			//JSON.parse returns an obj
			const user = JSON.parse(xhr.responseText);

			const output = `
				<ul>
					<li>ID: ${user.id}</li>
					<li>Name: ${user.name}</li>
					<li>Email: ${user.email}</li>
				</ul>
			`;

			response2.innerHTML = output;
		}
	};

	xhr.send();
});

getUsers.addEventListener("click", () => {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "users.json", true);

	xhr.onload = () => {
		if (xhr.status === 200) {
			//JSON.parse returns an obj
			const users = JSON.parse(xhr.responseText);
			let output = "";

			users.forEach(user => {
				output += `
					<ul>
					<li>ID: ${user.id}</li>
					<li>Name: ${user.name}</li>
					<li>Email: ${user.email}</li>
					</ul>
					`;
			});

			response3.innerHTML = output;
		}
	};

	xhr.send();
});
