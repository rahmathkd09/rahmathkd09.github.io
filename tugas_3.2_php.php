<?php
$tabungan=150000;
$bunga=12.5;
$jumlahBunga=$tabungan*$bunga/100;
$jumlahTabungan=$tabungan +($tabungan*$bunga/100);


echo "Saldo Tabungan =Rp".$tabungan."<br>";
echo "Bunga Per tahun=".$bunga."<br>";
echo "Besar Bunga=Rp".$jumlahBunga."<br>";
echo "Jumlah Tabungan=".$jumlahTabungan."<br>";

?>