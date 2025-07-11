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

$sql = "DELETE FROM login WHERE id=$id";
if (mysqli_query($conn, $sql)) {
  // Reset ID urut ulang
  mysqli_query($conn, "SET @num := 0");
  mysqli_query($conn, "UPDATE login SET id = @num := @num + 1");
  mysqli_query($conn, "ALTER TABLE login AUTO_INCREMENT = 1");

  echo json_encode(["message" => "Akun berhasil dihapus"]);
} else {
  echo json_encode(["message" => "Gagal menghapus akun"]);
}

?>
