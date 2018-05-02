<?php

// assuming numbers on GET variables
if (isset($_GET["num"]) && $_GET["num"] != "") {
	echo "<table>";
	for ($i = 1; $i <= htmlspecialchars($_GET["num"]); $i++) {
		echo "<tr>";
		for ($j = 1; $j <= htmlspecialchars($_GET["num"]); $j++) {
			echo "<td>" . $j * $i . "</td>";
		}
		echo "</tr>";
	}
	echo "</table>";
} else {
	echo "No numbers given.";
	exit();
}

// 
