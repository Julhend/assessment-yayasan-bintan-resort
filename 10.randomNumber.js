/**Tampilkan 5 angka random dari 1-100 :
– jika hasilnya <= 60 maka tampilkan tulisan “Kurang” disebelah angka
tersebut
– jika >60 dan <= 70 maka tampilkan tulisan “Cukup” disebelah angka
tersebut
– jika >70 dan <= 80 maka tampilkan tulisan “Baik” disebelah angka
tersebut
– jika >80 maka tampilkan tulisan “Luar Biasa” disebelah angka tersebut
– angka yang tampil adalah kelipatan 5 */



const nums = new Set();

while (nums.size !== 5) {
    nums.add(Math.floor(Math.random() * 100) + 1);
}
console.log(...nums);



// if (nums <= 60) {
//     console.log(...nums + " Kurang");
// } else if (nums > 60 && nums <= 70) {
//     console.log(...nums + " Cukup");
// } else if (nums > 70 && nums <= 80) {
//     console.log(...nums + " Baik");
// } else {
//     console.log(...nums + " Luar Biasa");
// }

