

//   First

// Bu soruyu Anlayamadım..

//   Second

function sayilarinToplami() {

  let sayi_1 = prompt("Bir sayi girin")
  let sayi_2 = prompt("Bir sayi daha girin")

   sayi_1 = Number(sayi_1)
   sayi_2 = Number(sayi_2)

   let toplam = sayi_1 + sayi_2

   console.log ("Sayıların toplamı : ", toplam)
}

sayilarinToplami()

//   Third

function sayiDizini(dizin) {

  let rakamlar = [32, 5, 1, 12, 45, 4, 87]
}//TIKANDIM

//   Fourth 

const users =  [
  {personal: "burak", password:"123123", role: "admin"},
  {personal: "toprak", password:"456456", role: "newbie"}
 ]

function userLogin() {

  let inputName = prompt ("USername :")
  let inputPass = prompt ("Password :")

  if (
    users.personal === inputName && users.password === inputPass
  ) {
      if(users.role === "admin"){
        alert ("Welcome Admin")
      } else if (users.role === "newbie"){
        alert ("Welcome newbie")
      }
      return
  }

  alert ("HAtalı giriş.")
}




   userLogin()




//   Fifth


//   Sixth
