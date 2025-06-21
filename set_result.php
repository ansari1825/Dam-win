<?php
include '../db.php';
$period = $_POST['period'];
$result = $_POST['result'];
$type = $_POST['type'];
$conn->query("INSERT INTO game_results (period, result, game_type) VALUES ('$period', $result, '$type')");
echo json_encode(['success' => true]);
?>