<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "kedai_ramen"; // nama DB yang kamu buat di phpMyAdmin

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
  die("Koneksi gagal: " . $conn->connect_error);
}
?>
