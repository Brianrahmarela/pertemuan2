//No2 & 4
//a
//i
/* Mengambil value inputan user */
let namaUser = prompt("Nama User:");
document.write("<b>Soal No.2</b></br></br>Nama User : " + namaUser + "<br/>");
//ii
let asalNegara = prompt('Asal Negara:');
document.write("Asal Negara : " + asalNegara);

//b
/* validasi inputan user */
let konfirmasi = confirm("Apakah data yang diisi udah benar?");
/* jika validasi benar */
if (konfirmasi) {
    document.write("<br>Data yang diisi sudah benar");
    alert("Terima kasih sudah mengisi form");
    /* jika validasi salah */
} else {
    alert("Data yang diisi masih salah! Mohon isi kembali!");
    // return namaUser;
    document.write("<br>Data masih salah! Silahkan isi data kembali");
}





