function kaliTerusRekursif(angka) {
    // you can only write your code here!
    //console.log(String(angka).length)
    if (String(angka).length === 1){
        return angka
    }else{
        var newAngka = String(angka)
        //console.log(newAngka.length)
        var hasilKali = newAngka[0] 
        for (var i = 1 ; i < newAngka.length ; i++){
            hasilKali = hasilKali * newAngka[i]
            //console.log(hasilKali + " *** ")
        }
        //console.log(hasilKali + " === ")
        return kaliTerusRekursif(hasilKali)
    }
  }
  
  // TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6