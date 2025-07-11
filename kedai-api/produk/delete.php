<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

include '../db.php';

$data = json_decode(file_get_contents("php://input"));

if (isset($data->id)) {
  $id = $data->id;

  $deleteQuery = "DELETE FROM produk WHERE id = $id";

  if ($conn->query($deleteQuery) === TRUE) {
    $conn->query("ALTER TABLE produk AUTO_INCREMENT = 1");
    echo json_encode(["message" => "Produk berhasil dihapus dan ID diperbarui."]);
  } else {
    http_response_code(500);
    echo json_encode(["message" => "Gagal menghapus produk.", "error" => $conn->error]);
  }
} else {
  http_response_code(400);
  echo json_encode(["message" => "ID tidak ditemukan."]);
}
?>
