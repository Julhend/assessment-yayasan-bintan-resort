/**Weird diberikan N integer dari inputan(1-100), jika N bernilai ganjil, cetak
“weird”, jika N bernilai genap dan diantara 2 dan 5,cetak “not Weird”, jika N
bernilai genap dan diantara 6 dan 20, cetak “weird”, jika N bernilai genap
dan N >20 , cetak “not weird”. */

//ganjil


for (let i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log("weird " + i)
    }
    if (i % 2 == 0) {
        if (i >= 2 && i <= 5) {
            console.log("not weird " + i)
        } else if (i >= 6 && i <= 20) {
            console.log("weird " + i)
        } else {
            console.log("not weird " + i);
        }

    }
}

