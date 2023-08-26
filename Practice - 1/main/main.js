function userText(){

let user = document.querySelector('#userName')
let teacher = document.querySelector('#justTeacher')
let input = prompt ("Welcome .. Please enter your name.")



if(input === "ömer") {
  
    user.innerHTML = "Hocam"
}else{
    user.innerHTML = input
}

}

function dateNow () {

    const date = new Date().toLocaleString('tr-TR');
    document.getElementById("date").innerHTML = `It's Time   ${date}`
}

setInterval(dateNow, 1000)