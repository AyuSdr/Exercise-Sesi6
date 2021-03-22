let tanya = true;
let count = 0;

while (tanya) {
    tanya = confirm('Apakah kamu mau mengulang');

    if (tanya === true) {
        count++;
    } else {
        alert('Perulangan sudah dilakukan sebanyak ' + count);
    }
}