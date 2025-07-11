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
$username = $data['username'];
$password = $data['password'];
$role = $data['role'];

$sql = "INSERT INTO login (username, password, role) VALUES ('$username', '$password', '$role')";
if (mysqli_query($conn, $sql)) {
  echo json_encode(["message" => "Akun berhasil ditambahkan"]);
} else {
  echo json_encode(["message" => "Gagal menambahkan akun"]);
}
?>
