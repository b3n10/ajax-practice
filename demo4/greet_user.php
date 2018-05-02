<?php

if (isset($_POST["name"]) && $_POST["name"] != "") {
	echo "Hi, " . $_POST['name'];
} else {
	echo "No name given.";
}
