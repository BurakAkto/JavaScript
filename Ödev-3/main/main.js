

//   First

const User = {UserName : "kullanici_1" ,password : "5142"};
const User_Id= prompt ("Kullanici adini giriniz :");
const User_Pw = prompt ("Sifrenizi girin :");

if (User_Id === User.UserName && User_Pw === User.password) {
  alert ("Sunucuya erisim saglanmıstır .")
} else {
  alert ("Hatali kullanici adi veya sifre ..")
}

//   Second

const name = prompt("Adinizi ve Soyadinizi giriniz :");
const yas = prompt ("Lutfen yasinizi giriniz :");

let grup 

if (yas >= 5 && yas <= 14) {
  grup = "Cocuk"
} else if (yas >= 15 && yas <= 25) {
  grup = "Genc"
} else if (yas >= 26 && yas <= 45) {
  grup = "Yetiskin"
} else if (yas >= 46 && yas <= 60) {
  grup = "Orta yas"
} else {
  grup = "Yaslı"
}
// Name üzeri neden çizili anlamadım !!!
console.log (`Adi ve Soyadi : ${name}, ${yas} yasinda ve ${grup} kategorisinde.`)

//   Third
const country =  prompt("Lutfen yasadiginiz sehri giriniz :")
const derece = prompt("Hava suan kac derece ?")

let havaDurumu

if (derece >= 0 && derece <= 10){
  havaDurumu = "Don Tehlikesi"
} else if (derece >= 11 && derece <= 15){
  havaDurumu = "Soguk"
} else if (derece >= 16 && derece <= 20){
  havaDurumu = "Serin"
} else if (derece >= 21 && derece <= 25){
  havaDurumu = "Güzel"
} else if (derece >= 26 && derece <= 32){
  havaDurumu = "Sıcak"
} else if (derece >= 33 && derece <= 40){
  havaDurumu = "Cok sıcak"
} 

console.log (`Kullanicinin yasadigi sehir : ${country} ve Hava suan ${havaDurumu}.`)

//   Fourth 

const person = {ad: "Ömer" ,credit: 0 ,yasakli: false}
const entryName = prompt("Kullanici adinizi girin :")

if (
  entryName === person.ad && person.credit >= 1 && person.yasakli === false
) {
  console.log("Başarılı erişim!");
} else {
  console.log("Giris basarisiz :");
  if (entryName !== person.ad) {
    console.log("Kullanici adi yanlis.");
  }
  if (person.credit < 1) {
    console.log("Oturuma giris hak'ki tükenmis.");
  }
  if (person.yasakli) {
    console.log("Yasakli kullanici.");
  }
}


//   Fifth

let ay = prompt("Bir ay giriniz")

if (ay === "Haziran" || ay === "Temmuz" || ay === "Agustos" ) {
  console.log ("Mevsim : Yaz")
} else if (ay === "Eylul" || ay === "Ekim" || ay === "Kasım" ) {
  console.log ("Mevsim : Sonbahar")
}else if (ay === "Aralık" || ay === "Ocak" || ay === "Şubat" ) {
  console.log ("Mevsim : Kis")
}else if (ay === "Mart" || ay === "Nisan" || ay === "Mayıs" ) {
  console.log ("Mevsim : İlkbahar")
}



//   Sixth

let ticket = {ad: "bilet" ,ucret: 30 ,tip: "ogrenci"}
let entryTip = prompt ("Musteri tipinizi giriniz. Örn:ogrenci")

if (entryTip === ticket.tip) {
  let soldTicket = ticket.ucret / 2
  console.log (`%50 indirim yapilmistir . Yeni fiyat : ${soldTicket} TL`)
}else {
  console.log ("İndirimsiz bilet")
}
