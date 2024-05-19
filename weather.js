
const apiKey = "381e93d332768bc581874ba9193b2d03";
const apiUrl =
"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const button = document
  .querySelector('.search-btn');
const place = document
  .querySelector('.input');
  
async function checkWeather(city){
  
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data= await response.json();
    console.log(data)
    
    let imageWr;
    if(data.weather[0].main == "Clouds"){
   imageWr  = `<img class="img" src="icon/cloudy.png"> <sub>cloudy</sub> `;
 } else if (data.weather[0].main == "Rain") {
   imageWr = `<img class="img" src="icon/rainy.png"><sub>rainy</sub>`;
 }else if (data.weather[0].main == "Drizzle") {
   imageWr = `<img class="img" src="icon/drizzle.png"><sub>drizzle</sub>`;
 }else if (data.weather[0].main == "Clear") {
   imageWr = `<img class="img" src="icon/sunny.png"><sub>clear</sub>`;
 }else if (data.weather[0].main == "Mist") {
   imageWr = `<img class="img" src="icon/mist.png"><sub>mist</sub>`;
 }
   document.querySelector('.temp-image')
    .innerHTML = imageWr;
document.querySelector('.temp')
.innerHTML = Math.round(data.main.temp) + "&deg;C";
 document.querySelector('.humidity').innerHTML = "humudity" +`<br>`+ data.main.humidity + "%";
 document.querySelector('.wins').innerHTML = "speed" + `<br>`+data.wind.speed + "km/h";
 document.querySelector('.country').innerHTML = data.name;

 
let fahrnet = document.querySelector('.temp');
fahrnet.addEventListener('click',()=>{
  
    let change =(data.main.temp) * (9/5) + 32;
     fahrnet.innerHTML=Math.round(change) +"&#8457;";
});

}
//default city value
checkWeather( 'dire dawa');
button.addEventListener('click', () => {

// Inputted city
checkWeather(place.value);
 
});

  // Tab to edit


  

