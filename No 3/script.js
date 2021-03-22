let iterasiAwal = 0;
let iterasiAkhir = 20;

for (iterasiAwal; iterasiAwal <= iterasiAkhir; iterasiAwal++) {
    if (iterasiAwal % 2 === 0) {
        console.log(iterasiAwal + ' adalah bilangan Genap');
    } else {
        console.log(iterasiAwal + ' adalah bilangan Ganjil');
    }
}