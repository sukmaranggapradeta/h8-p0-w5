function changeVocals (str) {
  //code di sini
  var alfabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    //console.log(alfabet.length)
    //console.log(str)
    //console.log(alfabet[25] + " == " + alfabet[1])
    var gantiHuruf = ""
    for (var i = 0 ; i < str.length ; i++){
        var temp = ""
        for (var j = 0 ; j < alfabet.length ; j++){
            if ((str[i] === "a") || (str[i] === "i") || (str[i] === "u")|| (str[i] === "e")|| (str[i] === "o")|| (str[i] === "A")|| (str[i] === "I") || (str[i] === "U")|| (str[i] === "E")|| (str[i] === "O")) {
                if (str[i] === alfabet[j]){
                    temp = alfabet[j+1]
                }
            }else if ((str[i] === alfabet[j])) {
                temp = alfabet[j]
            }
        }
        if (temp === " "){
            gantiHuruf += str[i]
        }
        if (temp === ""){
            gantiHuruf += " "
        }else 
        {
            gantiHuruf += temp
        }
    }
    //console.log(gantiHuruf + " <=== ini maju 1 ")
    return gantiHuruf
}

function reverseWord (str) {
  //code di sini
  //console.log(str.length)
    var balik = ""
    for (var i = (str.length-1) ; i >= 0 ; i--){
        balik += str[i]
    }
    //console.log(balik + " <=== ini balik")
  return balik
}

function setLowerUpperCase (str) {
  //code di sini
    //console.log(str)
    var ubahKapital = ""
    for (var i = 0 ; i < str.length ; i++){
        if (str[i] === str[i].toUpperCase()){
            ubahKapital += str[i].toLowerCase()
        }else 
        if (str[i] === str[i].toLowerCase()){
            ubahKapital += str[i].toUpperCase()
        }
    }
    //console.log(ubahKapital + " <=== ini ubah huruf Besar kecil ")
    return ubahKapital
}

function removeSpaces (str) {
  //code di sini
  //console.log(str)
  var tanpaSpasi = ""
  for (var i = 0 ; i < str.length ; i++){
    if (str[i] !== " "){
        tanpaSpasi += str[i]
    }
  }
  //console.log(tanpaSpasi + " <=== ini hapus Spasi")
  return tanpaSpasi
}

function passwordGenerator (name) {
  //code di sini
  //console.log("\n")
  var gantiHuruf = changeVocals(name);
  var balik = reverseWord(gantiHuruf)
  var hurufBesarKecil = setLowerUpperCase(balik)
  var hapusSpasi = removeSpaces(hurufBesarKecil)

  //console.log(hapusSpasi.length)
  if (hapusSpasi.length <= 5){
      return "Minimal karakter yang diinputkan adalah 5 karakter";
  }else{
    return hapusSpasi
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
console.log(passwordGenerator('AIUEOaiueo')); //