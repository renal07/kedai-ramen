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

if (
  isset($data->nama) &&
  isset($data->harga) &&
  isset($data->gambar)
) {
  $nama = $data->nama;
  $harga = $data->harga;
  $gambar = $data->gambar;

  $sql = "INSERT INTO produk (nama, harga, gambar)
          VALUES ('$nama', '$harga', '$gambar')";

  if ($conn->query($sql) === TRUE) {
    http_response_code(201);
    echo json_encode(["message" => "Produk berhasil ditambahkan."]);
  } else {
    http_response_code(500);
    echo json_encode(["message" => "Gagal menambahkan produk.", "error" => $conn->error]);
  }
} else {
  http_response_code(400);
  echo json_encode(["message" => "Data tidak lengkap."]);
}
?>
