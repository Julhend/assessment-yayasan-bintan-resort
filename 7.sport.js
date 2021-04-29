//totalKalori adalah jumlah kalori yang dikonsumsi linda untuk menentukan jenis olahraga yang dibutuhkan 
/**suatu hari linda akan olahraga,olahraga yang dilakukan berdasarkan dari
total kalori yang linda makan dan minum,jika total kalori yang dikonsumsi
linda lebih dari 670 maka linda akan olahraga “lari”, jika lebih dari 500 akan
olahraga”tenis” dibawah itu linda olahraga renang, olahraga tersebut
dilakukan dalam menit, yang mana tiap 10 kalori dikerjakan 1 menit,
tentukan jumlah kalori yang dikonsumsi linda dan jenis olahraga dan waktu
olahraga yang dikerjakan linda ? */


let totalKalori = 660;
var waktu = totalKalori / 10;


if (totalKalori < 500) {
    console.log("Jumlah Kalori yang dikonsumsi linda sebesar : " + totalKalori);
    console.log("Olahraga yang dilakukan linda adalah : Renang");
    console.log("Waktu olahraga yang dikerjakan linda sebesar : " + waktu + " menit");
}
else if (totalKalori >= 500 && totalKalori < 670) {
    console.log("Jumlah Kalori yang dikonsumsi linda sebesar : " + totalKalori);
    console.log("Olahraga yang dilakukan linda adalah : Tenis");
    console.log("Waktu olahraga yang dikerjakan linda sebesar : " + waktu + " menit");
}
else if (totalKalori >= 670) {
    console.log("Jumlah Kalori yang dikonsumsi linda sebesar : " + totalKalori);
    console.log("Olahraga yang dilakukan linda adalah : Lari");
    console.log("Waktu olahraga yang dikerjakan linda sebesar : " + waktu + " menit");
}

