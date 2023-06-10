

//   First

 let limit = 10
 let User = prompt ("Yasinizi Giriniz")
 if (limit < User) {

     console.log ("Giriş Basarili..")

 } else {

     if(User < limit) {
         alert ("Giriş yapılamadı..")
     }
 }

//   Second

 let control_1 = 1
 let control_0 = 0
 let sayi = prompt ("Bir sayi giriniz..")

 if (sayi >= control_1) 
 {
     console.log ("Deger Pozitif")

 } else {
     if (sayi < control_0) {
     console.log ("Deger Negatif")
     }
     if (sayi == control_0) {
         console.log ("Deger 0'a Esittir..")
     }
 }


//   Third

 let entry_1 = prompt ("Bir Sayi giriniz")
 let entry_2 = prompt ("Bir Sayi daha giriniz")

 if (entry_1 ,entry_2 > 0) {
     let toplam = (Number (entry_1) + Number (entry_2))
     alert ("İki islemin toplamı : " + toplam)

     let cıkart = (Number (entry_1) - Number (entry_2))
     alert ("İki işlem çıkartıldı , Sonuç : " +cıkart)

     let carp = (Number (entry_1) * Number (entry_2))
     alert ("İki islemin carpımı : " + carp)

     let bol = (Number (entry_1) / Number (entry_2))
     alert ("Bolumunden kalan : " + bol)
 }


//   Fourth

 let kullanici_vize = prompt ("Vize notunu giriniz..")
 let kullanici_final = prompt ("Lütfen final notunu giriniz..")

 let durum = (kullanici_vize % 40) + (kullanici_final % 60)

 if (durum >= 60) {
     console.log ("Basarili..")
 }else {
     console.log ("Basarisiz..")
 }

//   Fifth

 let ad = prompt("Adınızı girin:")
 if (ad === null) {
   alert("İslemi iptal ettiniz.")
 } else {
   if (ad.length >= 3) {
     var soyad = prompt("Soyad giriniz :")
     if (soyad === null) {  
       alert("İslemi iptal ettiniz.")
     } else {
       alert("Ad : " + ad + " Soyadınız : " + soyad)
     }
   } 
 }


//   Sixth

 let cuzdan = 100
 let alinacakOlan = {
   urunAdi: "" ,fiyati: 50
 }

 alinacakOlan.urunAdi = "Gofret"
 alinacakOlan.fiyati = 15


 let userUrun = prompt("Talep ettiginiz urunu giriniz..")

 if (userUrun === alinacakOlan.urunAdi) {

   if (cuzdan >= alinacakOlan.fiyati) {
     cuzdan -= alinacakOlan.fiyati
     console.log(userUrun + " Urun satın alma gerceklestirildi..")
     console.log("Guncel bakiye : " + cuzdan)
   } else {
     console.log("Bakiye yetersiz..")
   }
 } else {
   alert("Urun bulunamadı..")
 }


// Seventh

const user = {ad: "" ,soyad: "" ,yas: "" }

  user.ad = prompt("Adinizi girin:")
  user.soyad = prompt("Soyadinizi girin:")
  user.yas = prompt("Yasinizi girin:")
  
  if (user.soyad == "") {
    user.soyad = "Belirtilmedi"
  }
  
  console.log(user)

