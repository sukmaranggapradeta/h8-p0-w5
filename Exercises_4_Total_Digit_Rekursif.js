
function totalDigitRekursif(angka) {
  // you can only write your code here!
  if (String(angka).length === 0){
    return 0
  }else{
    var newAngka = String(angka)
    var angkaPertama = newAngka.slice(1,newAngka.length)
    //console.log(angkaPertama + " ini angka pertama")
    //console.log(newAngka[0] + " ini newAngka ")
    var num = Number(newAngka[0])
    return num += totalDigitRekursif(angkaPertama)
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5