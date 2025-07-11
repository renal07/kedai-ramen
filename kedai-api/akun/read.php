<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include '../koneksi.php';

$result = mysqli_query($conn, "SELECT * FROM login");
$data = [];
while ($row = mysqli_fetch_assoc($result)) {
  $data[] = $row;
}
echo json_encode($data);
?>
