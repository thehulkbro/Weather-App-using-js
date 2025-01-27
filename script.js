// http://api.weatherapi.com/v1/current.json?key=f83c5cc61d8b452c8a661804252701&q=kolkata&aqi=no

const temparature = document.querySelector(".temp");
const city = document.querySelector(".cityi");
const date = document.querySelector(".datei");
const condition = document.querySelector(".conditioni");
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const img = document.querySelector(".iconi");


btn.addEventListener('click', searchForLocation);
let target = "kolkata";

const fetchWeather = async (targetW) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=f83c5cc61d8b452c8a661804252701&q=${targetW}&aqi=no`;
    
    let result = await fetch(url);
    let data = await result.json();
    // console.log(data);

    let temp = data.current.temp_c;
    let city1 = data.location.name;
    let date1 = data.location.localtime;
    let condition1 = data.current.condition.text;
    let icon1 = data.current.condition.icon;
    console.log(icon1);
    updateDetails(temp, city1, date1, condition1,icon1);
};
function updateDetails(temp, city1, date1, condition1,icon1){    
    
    let splitDate = date1.split(" ")[0];
    let splitTime= date1.split(" ")[1];
    // let currDay = daysName(new Date(splitDate).getDay());
    let currDay = days[new Date(splitDate).getDay()];
    temparature.innerText = temp + "°C";
    city.innerText = "Location : " + city1;
    date.innerText = `Its ${currDay}; 
    ${splitTime} ${splitDate}`;
    condition.innerText = condition1;
    img.src=icon1;
}

function searchForLocation(e){
    e.preventDefault();
    target = search.value;
    fetchWeather(target);
}
fetchWeather(target);

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// function daysName(num){
//     switch(num){
//         case 0: return "Sunday";
//         case 1: return "Monday";
//         case 2: return "Tuesday";
//         case 3: return "Wednesday";
//         case 4: return "Thursday";
//         case 5: return "Friday";
//         case 6: return "Saturday";
//     }
// }