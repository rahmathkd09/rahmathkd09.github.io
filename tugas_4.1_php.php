<?php
$hargaBeli=8000;
$hargaJual=7500;
$untung=300;
$hargaPokok=$hargaJual-$untung;

$jumlahEkor=($hargaBeli-$hargaJual)/$untung;

echo "Harga Beli = Rp.".$hargaBeli."<br>";
echo "Harga Jual = Rp.".$hargaJual."<br>";
echo "Keuntungan = Rp.".$untung."<br>";
echo "Jumlah Ekor = (Harga Beli-Harga Jual)/Keuntungan = ".round($jumlahEkor,0)."<br>";
?>