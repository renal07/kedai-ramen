<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include '../koneksi.php';

// sisanya tetap...

$data = json_decode(file_get_contents("php://input"), true);
$id = $data['id'];
$username = $data['username'];
$password = $data['password'];
$role = $data['role'];

if ($password === '') {
  $sql = "UPDATE login SET username='$username', role='$role' WHERE id=$id";
} else {
  $sql = "UPDATE login SET username='$username', password='$password', role='$role' WHERE id=$id";
}

if (mysqli_query($conn, $sql)) {
  echo json_encode(["message" => "Akun berhasil diupdate"]);
} else {
  echo json_encode(["message" => "Gagal update akun"]);
}
?>
