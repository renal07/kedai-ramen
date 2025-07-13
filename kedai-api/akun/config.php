<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "kedai_ramen"; // ganti sesuai nama database Anda

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die(json_encode(["message" => "Koneksi gagal: " . $conn->connect_error]));
}
?>

//coba
