

const api = {
    key : '15356d16af69f3346d31af21d2f1311d',
    baseurl : 'https://api.openweathermap.org/data/2.5',
}


window.onload = function() {

    getApi("uzbekistan")
    
    };






let d = new Date() ;
let month = ["01" , "02" , "03" , "04" , "05 " , "06" , "07" , "08" , "09" , "10" , "11"  ,"12" , ]
let oy = d.getMonth()
console.log(oy+1);
let year = d.getFullYear()
let kun = d.getDate();

let haftaKun = [ "воскресенье" , "понидельник" , "вторник" , "среда" , "четверг" , "пятница" , "суббота"]
let hafta = d.getDay()
console.log(haftaKun[hafta]);




let inp = document.querySelector("#inp");
inp.addEventListener("keypress" , set )



function set(event) {
            if(event.keyCode == 13){
                if (inp.value == 0 ) {
                    alert("davlat kiritilmadi")
                }
                else{
                    getApi(inp.value)
                }
            }
           
}


function getApi(davlat) {
    fetch(`${api.baseurl}/weather?q=${davlat}&units=metric&APPID=${api.key}`)
    .then(response =>{
                 if (response.status === 400) {
                     alert("Davlat nomi kiritilmadi !!") 
                 }
                else  if (response.ok === false) {
                    alert("Bunday Davlat mavjud emas");
                  }
                else{ 
                    return response.json() 
                }
             })  
    .then(work)
}
function work(json) {
    let name = document.querySelector(".name")
    let temp = document.querySelector(".temp")
    let main = document.querySelector(".icon")
    
    document.getElementById("a4").setAttribute("src" , `http://openweathermap.org/img/w/${json.weather[0].icon}.png `)
    

    name.innerHTML = json.name
    temp.innerHTML = Math.floor(json.main.temp) + '°C'
    main.innerHTML = json.weather[0].main
}


let day1 = document.querySelector(".wik-day")
let month1 = document.querySelector(".month")
let year1 = document.querySelector(".year")
let wik = document.querySelector(".wik")



day1.innerHTML = kun + "."
month1.innerHTML = oy +1  + "." 
year1.innerHTML = year
wik.innerHTML = haftaKun[hafta]


























// let d = new Date() ;
// let yil = d.getFullYear()
// ///           0          1      2          3                                               9      10     11
// let month = ["yanvar" , "f" , "mart" , "aprel" , "may " , "iyun" , "iyul" , "a" , "sen" , "octabr" , "n"  ,"dec"]
// let oy = d.getMonth()
// console.log(month[oy]);


// console.log(haftaKun[hafta]);

// let kun = d.getDate();
// console.log(kun);

// let soat = d.getHours();
// console.log(soat);

// let min = d.getMinutes();
// console.log(min);

// let sek = d.getSeconds();
// console.log(sek);

// let millsek = d.getMilliseconds()
// console.log(millsek);

// // let time = d.getTime()
// // console.log(time);
