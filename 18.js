import static java.lang.System.out;
public class GanjilGenap {
    public static void main(String[] stbld) {
        int nilai, sisa;
        java.io.Scanner masukan = new java.io.Scanner(System.in);
        out.println("Nilai angka: ");
        nilai = masukan.nextLine();
        nilai % 2 = sisa;
        switch (sisa) {
            case 0;

                System.out.println(genap);
            default;
                System.out.println(ganjil);
                break;
        }
    }
}
Temukan kesalahan dari kode diatas.
    Jawab : Standard penulisan switch case menggunakan ":" bukan ";" setelah case & default 
(case0: & default: )