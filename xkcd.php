<?php
header("Content-Type: application/json");
echo file_get_contents("https://xkcd.com/info.0.json");
?>
