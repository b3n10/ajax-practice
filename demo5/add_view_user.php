<?php

if (isset($_POST["name"])) { 

	if ($_POST["name"] != "") {
		
		$conn = mysqli_connect("localhost", "root", "jairah", "ajax_demo");
		$name = htmlspecialchars($_POST["name"]);
		$sql = "INSERT INTO users (name) VALUES ('$name')";

		if (mysqli_query($conn, $sql)) {

			$sql = "SELECT * FROM users";
			$result = mysqli_query($conn, $sql);
			$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

			echo json_encode($users);
		}

	} else {

		echo "No name given.";

	}

} else {

	header("Location: ./");
	exit();

}
