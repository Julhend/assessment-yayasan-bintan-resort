/*Yunia akan pergi belanja, belanja yunia dia tentukan dari berapa dia bawa
uang, dengan uang diatas 750000 yuni mendapat “jas, diatas 350000 yunia
mendapat “celana panjang, diatas 225000 dapat “kemeja”, diatas 100000
dapat “kaos” dan diatas 50000 dapat “celana pendek” .

Contoh input: masukan jumlah uang : 220000 output: yunia dapat
kaos */

//pay adalah jumlah uang yang di bawa yunia
let pay = 50000;

if (pay >= 50000 && pay < 100000) {
    console.log("Yunia dapat Celana Pendek");
} else if (pay >= 100000 && pay < 225000) {
    console.log("Yunia dapat kaos");
} else if (pay >= 225000 && pay < 350000) {
    console.log("Yunia dapat Kemeja");
} else if (pay >= 350000 && pay < 750000) {
    console.log("Yunia dapat Celana Panjang");
} else if (pay >= 750000) {
    console.log("Yunia dapat Jas");
} else {
    console.log("Yunia tidak mempunyai cukup uang untuk membeli");
}



