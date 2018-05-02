const btnMultiply = document.querySelector("#btn-multiply"),
	txtNumber = document.querySelector("#txt-number"),
	response = document.querySelector("#ajax_response");

btnMultiply.addEventListener("click", () => {
	const xhr = new XMLHttpRequest();

	xhr.open("GET", `multiplication.php?num=${(txtNumber.value === "") ? "" : txtNumber.value}`, true);

	xhr.onload = () => {
		if (xhr.status === 200) {
			response.innerHTML = xhr.responseText;
		}
	};

	xhr.send();
	// console.log(`${txtNumber.value}`);
});

