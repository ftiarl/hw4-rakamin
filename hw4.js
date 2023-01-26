function nilairandomArray(jumlah) {
  let randomArray = [];
  for (i = 0; i < jumlah; i++) {
    randomArray.push(Math.floor(Math.random() * 50) + 1);
  }
  return randomArray;
}

let array = nilairandomArray(100);

let genap = [];
let ganjil = [];
for (i = 0; i < array.length; i++) {
  if (i % 2 === 0){
    genap.push(array[i]);
  } else {
    ganjil.push(array[i])
  }
}

function nilaiMax (nilai) {
  let max = nilai[0];
  for (let i = 1; i < nilai.length; i++) {
    if (nilai[i] > max) {
      max = nilai[i];
    }
  }
  return max;
}

function nilaiMin (nilai) {
  let min = nilai[0];
  for (let i = 1; i < nilai.length; i++) {
    if (nilai[i] < min) {
      min = nilai[i];
    }
  }
  return min;
}

function nilaiTotal(nilai) {
  let total = 0 ;
  for (let i = 0; i < nilai.length; i ++) {
    total += nilai[i];
  }
  return total;
}

function nilaiRataRata(nilai) {
  return rataRata = nilaiTotal(nilai) / nilai.length;
}

function perbandingan(nilaiGanjil, nilaiGenap) {
  if (nilaiGanjil < nilaiGenap ) {
    return ("Nilai Ganjil " + nilaiGanjil + " lebih kecil daripada nilai Genap " + nilaiGenap);
  } else if (nilaiGanjil > nilaiGenap) {
    return ("Nilai Ganjil " + nilaiGanjil + " lebih besar daripada nilai Genap " + nilaiGenap);
  } else {
    return ("Nilai Ganjil " + nilaiGanjil + " sama besar dengan nilai Genap " + nilaiGenap);
  }
}

console.log("100 Nilai Random Array : " + array + "\n");
console.log("50 Nilai Array Ganjil : " + ganjil + "\n");
console.log("50 Nilai Array Genap : " + genap + "\n");

console.log("100 Nilai Random Array Max : " + nilaiMax(array));
console.log("100 Nilai Random Array Min : " + nilaiMin(array));
console.log("100 Nilai Random Array Total : " + nilaiTotal(array));
console.log("100 Nilai Random Array Rata-rata : " + nilaiRataRata(array) + "\n");

console.log("50 Nilai Array Ganjil Max : " + nilaiMax(ganjil));
console.log("50 Nilai Array Ganjil Min : " + nilaiMin(ganjil));
console.log("50 Nilai Array Ganjil Total : " + nilaiTotal(ganjil));
console.log("50 Nilai Array Ganjil Rata-rata : " + nilaiRataRata(ganjil) + "\n");

console.log("50 Nilai Array Genap Max : " + nilaiMax(genap));
console.log("50 Nilai Array Genap Min : " + nilaiMin(genap));
console.log("50 Nilai Array Genap Total : " + nilaiTotal(genap));
console.log("50 Nilai Array Genap Rata-rata : " + nilaiRataRata(genap) + "\n");

console.log("Nilai Max : " + perbandingan(nilaiMax(ganjil), nilaiMax(genap)));
console.log("Nilai Min : " + perbandingan(nilaiMin(ganjil), nilaiMin(genap)));
console.log("Nilai Total : " + perbandingan(nilaiTotal(ganjil), nilaiTotal(genap)));
console.log("Nilai Rata-rata: " + perbandingan(nilaiRataRata(ganjil), nilaiRataRata(genap)));