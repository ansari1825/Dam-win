<?php
include '../db.php';
$uid = $_POST['uid'];
$amount = $_POST['amount'];
$conn->query("UPDATE users SET balance = balance - $amount WHERE uid = '$uid'");
echo json_encode(['success' => true]);
?>