/* Diberikan sebuah function cariPelaku(kalimat) 
yang menerima satu parameter berupa string. 
Function akan me-return jumlah berapa kali 
ditemukan kata "abc" secara berturut-turut 
di dalam kalimat tersebut. 
Gunakan regex untuk melatih kemampuan regex.

Code */
function cariPelaku(str) {
  // you can only write your code here!
  //console.log(str)
  var cari = str.match(/abc/gi)
  // console.log(cari.length)
  return cari.length
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2