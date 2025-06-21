<?php
include '../db.php';
$id = $_POST['id'];
$conn->query("UPDATE deposits SET status='approved' WHERE id=$id");
echo json_encode(['success' => true]);
?>