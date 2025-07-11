<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

include '../db.php';

$data = json_decode(file_get_contents("php://input"));

if (
  isset($data->id) &&
  isset($data->nama) &&
  isset($data->harga) &&
  isset($data->gambar)
) {
  $id = $data->id;
  $nama = $data->nama;
  $harga = $data->harga;
  $gambar = $data->gambar;

  $stmt = $conn->prepare("UPDATE produk SET nama=?, harga=?, gambar=? WHERE id=?");
  $stmt->bind_param("sdsi", $nama, $harga, $gambar, $id);

  if ($stmt->execute()) {
    echo json_encode(["message" => "Produk berhasil diperbarui."]);
  } else {
    http_response_code(500);
    echo json_encode(["message" => "Gagal memperbarui produk."]);
  }

  $stmt->close();
} else {
  http_response_code(400);
  echo json_encode(["message" => "Data tidak lengkap."]);
}
?>
