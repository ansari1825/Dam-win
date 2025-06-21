<?php
include '../db.php';
$id = $_POST['id'];
$conn->query("UPDATE withdrawals SET status='approved' WHERE id=$id");
echo json_encode(['success' => true]);
?>