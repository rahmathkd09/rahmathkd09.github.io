<?php
echo '<h1><center>Tugas Weekend Tanggal 10/10/2020<center></h1>';

function LpKubus( $rusuk ) {
    return 6*pow( $rusuk, 2 );
}

echo '1.Menghitung Luas Permukaan Kubus, dengan panjang setiap rusuk sebagai berikut: <br>';
echo 'a.4cm, Rumus Luas Permukaan Kubus=6*rusuk*rusuk='.Lpkubus( 4, 2 ).'cm <br>';
echo 'b.7cm, Rumus Luas Permukaan Kubus=6*rusuk*rusuk='.Lpkubus( 7, 2 ).'cm<br>';
echo 'c.10cm Rumus Luas Permukaan Kubus=6*rusuk*rusuk='.Lpkubus( 10, 2 ).'cm<br>';
echo 'd.12cm Rumus Luas Permukaan Kubus=6*rusuk*rusuk='.Lpkubus( 12, 2 ).'cm<br><br>';

function rKubus( $luas ) {
    return sqrt( $luas/6 );
}
echo '2.Menghitung Panjang rusuk kubus dengan luas=3.750cm=rusuk=sqrt(luas/6)='.rKubus( 3750 ).'cm<br><br>';

function vtabung( $jari, $tinggi ) {
    return pow( $jari, 2 )*3.14*$tinggi;
}
echo '3. Menghitung Volume Tabung dengan jari2=10cm dan tinggi=30cm=jari*jari*3.14*tinggi='.vtabung( 10, 30 ).'cm <br><br>';
//2 ( π r 2 )+ 2 π r t = 2 π r ( r + t );

function Ltabung( $jari, $tinggi ) {
    return 2*( 3.14 )*$jari*( $jari+$tinggi );
}
echo '4.Menghitung Luas tabung dengan jari2=10cm dan tinggi 30cm=2 π r ( r + t )='.Ltabung( 14, 10 ).'cm <br><br>';

function LLingkaran( $jari, $v ) {
    return $v*pow( $jari, 2 );
}

echo '5.Menghitung Luas Lingkaran dengan Jari2=14cm  : '.LLingkaran( 14, 3.14 ).'cm <br><br>';

function KLingkaran( $jari, $v ) {
    return 2*3.14*$jari;
}

echo '6. Menghitung Luas dan keliling lingkaran dengan diameter=14cm, sehingga jari2=14/2=7cm <br>';
echo 'Luas Lingkaran tersebut=3.14*jari*jari= '.LLingkaran( 7, 3.14 ).'cm <br>';
echo 'Keliling Lingkaran tersebut=2.3.14*jari='.KLingkaran( 7, 3.24 ).'cm <br><br>';

echo '7. Menghitung jarak dari ban mobil dengan jari2=21cm dan kecepatan=200= S=v*t='.Klingkaran( 21, 3.14 )*200, 'cm';

?>