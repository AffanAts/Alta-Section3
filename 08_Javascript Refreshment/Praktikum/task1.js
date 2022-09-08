let a = 5;
let b = "kampus merdeka";
const nama = "Budi";
const terdaftar = true; //jika true akan menampilkan hasil di baris 22
let lengkapArr = [a, b, nama, terdaftar];

function perkenalan () {
    let asal = "indonesia";
    return console.log (
        "Perkenalkan nama saya " + 
        nama +  
        " nomor urut " + 
        a + 
        " sekarang sedang mengikuti " + 
        b + 
        " berasal dari  " +
        asal
    );
}

if (terdaftar === true){
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
/*nama = b; --> 'nama' memiliki variable constant sehingga tidak bisa diubah nilainya */

//console.log("asal diakses =" + asal);
console.log("array = " + lengkapArr[2]); //Ambil index ke 2 dalam array di baris 5
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan();