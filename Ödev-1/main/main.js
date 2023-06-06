


// Ödev-1 Degisken olusturma ve Veri Turleri

const isim = "Burak";
console.log ("Benim adım" ,isim);
console.log (typeof isim);


let yas = 33;
console.log ("Yasım" ,yas);
console.log (typeof yas);

const aktif = true;
const pasif = false;
console.log ("durum?" ,aktif);
console.log ("durum?" ,pasif);
console.log (typeof aktif);

// Ödev-2 Dizi Elemanlarınından Verileri Cekme

let sehirler = ["Antalya" ,"İzmir" ,"İstanbul" ,"Ankara" ,"Elazig"];
let memleket = sehirler[4];
let dogumyeri = sehirler[0]
console.log ("Memleketim :" ,memleket);
console.log ("Doğumyerim :" ,dogumyeri);
sehirler.yenisehir = "Trabzon";
console.log (sehirler);

// Ödev-3 Aritmetik İslemler

let sayi1 = 3;
let sayi2 = 6;
console.log (sayi1+sayi2);
console.log (sayi1-sayi2);
console.log (sayi1*sayi2);
console.log (sayi1/sayi2);
let mod = sayi1%sayi2;
console.log (mod);

// Ödev-4 Karsilastirma Operatörleri

let sayi3 = 33;
let sayi4 = 66;
let durum = sayi3==sayi4;
console.log ("Esitmi ? :" ,durum);
let durum_2 = sayi3!=sayi4;
console.log ("Esit degilmi ? :" ,durum_2);
let buyukmu = sayi3>sayi4;
console.log ("Sayi3 den buyukmu ? :" ,buyukmu);
let kucukmu = sayi3<sayi4;
console.log ("Sayi3 diger sayıdan kucukmu ? :" ,kucukmu);

// Ödev-5 Atama Operatörleri

let x = 11;
let y = 22;
let toplam = (x+y);
console.log ("Toplamı" ,toplam);
x = x+2;
y = y-5;
console.log ("X ve Y 'nin yeni değerleri" ,x ,y);

// Ödev-6 Prompt

let kullaniciAdi = prompt ("Adınızı Girin");
const userName = {Ad:kullaniciAdi};
console.log (userName);

