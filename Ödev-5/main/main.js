// FİRST

function kullaniciNot(puan) {

  if (puan >= 0 && puan < 50) {

      return "Ortalama ile gecti.."

  } else if (puan >= 50 && puan < 70) {

      return "İyi ile gecti.."
     
  } else if (puan >= 70 && puan < 80) {

      return "Pekiyi ile gecti.."
      
  } else if (puan >= 90 && puan <= 100) {

      return "Çok iyi ile gecti.."
      
  } else {

     alert ("0-100 aralığında bir puan giriniz.. ")
     return 
       
  } 
}  // User 'ı geçerli bir not yada sayı girmediğinde tekrar not girmesini istemeyi hocaya sor.

let userPuan =prompt ("Sınav Puanınızı giriniz :")

console.log("Sonuç : ", kullaniciNot(userPuan))

// SECOND

/*

Tıkandım

*/


// THİRD

function cumleArrayHali (cumle) {

  let girilenCumle = cumle.split(" ")
  return girilenCumle
}

let entry = prompt("Birkac cumle yazınız..")

console.log (cumleArrayHali(entry))

// FOURTH

// 4 ve 5 . ödevi hocadan talep et mantık kuramıyorsun. 