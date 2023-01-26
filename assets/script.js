
var submitBtn = document.getElementById('submitbtn');
var city = document.getElementById('inputCity').value;

submitBtn.addEventListener('click', btnSubmit);
submitBtn.addEventListener('click', btnSubmit1);

var APIKey = '4fd6f21c09387bdd2ef7e9728c3da374';
var APIKey2 = 'a722d57109fee8e36a0484882d4db6e9';

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;


var cardData1 = document.getElementById('card1')

var featuredCity = document.getElementById('featuredCity');
var currentTemp = document.getElementById('currentTemp');
var currentSymbol = document.getElementById('currentSymbol')
var currentWind = document.getElementById('currentWind');
var currentHumidity = document.getElementById('currentHumidity');

var day1 = document.getElementById('date-1')
var day1Temp = document.getElementById('day1Temp');
var day1Wind = document.getElementById('day1Wind');
var day1Humidity = document.getElementById('day1Humidity');

var day2 = document.getElementById('date-2')
var day2Temp = document.getElementById('day2Temp');
var day2Wind = document.getElementById('day2Wind');
var day2Humidity = document.getElementById('day2Humidity');

var day3 = document.getElementById('date-3')
var day3Temp = document.getElementById('day3Temp');
var day3Wind = document.getElementById('day3Wind');
var day3Humidity = document.getElementById('day3Humidity');

var day4 = document.getElementById('date-4')
var day4Temp = document.getElementById('day4Temp');
var day4Wind = document.getElementById('day4Wind');
var day4Humidity = document.getElementById('day4Humidity');

var day5 = document.getElementById('date-5')
var day5Temp = document.getElementById('day5Temp');
var day5Wind = document.getElementById('day5Wind');
var day5Humidity = document.getElementById('day5Humidity');



function btnSubmit() {
clearData();
var city = document.getElementById('inputCity').value;
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";

fetch(queryURL)
  .then((response) => response.json())
  .then((data) => generateCards(data));

localStorage.setItem('CityName', JSON.stringify(city)); 
}

function btnSubmit1() {
    var city = document.getElementById('inputCity').value;
    
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey2 + "&units=imperial";
    fetch(queryURL)
      .then((response) => response.json())
      .then((data) => generateCards1(data)); 
document.getElementById('inputCity').value = '';
clearMem();
logToMem();
    }



var generateCards = (data) => {

    var img = document.createElement("img");
    img.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon +'@2x.png';

    console.log(data)
    currentHumidity.append(data.main.humidity)
    currentWind.append(data.wind.speed)
    currentTemp.append(data.main.temp)
    currentSymbol.appendChild(img)
    featuredCity.append(data.name)
    
};
var generateCards1 = (data) => {
    console.log(data)
    day1.append(data.list[1].dt_txt)
    day1Humidity.append(data.list[1].main.humidity)
    day1Wind.append(data.list[1].wind.speed)
    day1Temp.append(data.list[1].main.temp)

    day2.append(data.list[9].dt_txt)
    day2Humidity.append(data.list[9].main.humidity)
    day2Wind.append(data.list[9].wind.speed)
    day2Temp.append(data.list[9].main.temp)

    day3.append(data.list[17].dt_txt)
    day3Humidity.append(data.list[17].main.humidity)
    day3Wind.append(data.list[17].wind.speed)
    day3Temp.append(data.list[17].main.temp)

    day4.append(data.list[25].dt_txt)
    day4Humidity.append(data.list[25].main.humidity)
    day4Wind.append(data.list[25].wind.speed)
    day4Temp.append(data.list[25].main.temp)

    day5.append(data.list[33].dt_txt)
    day5Humidity.append(data.list[33].main.humidity)
    day5Wind.append(data.list[33].wind.speed)
    day5Temp.append(data.list[33].main.temp)
};

function clearData () {
document.getElementById('currentSymbol').innerHTML = "";
document.getElementById('featuredCity').innerHTML = "";
document.getElementById('currentHumidity').innerHTML = "";
document.getElementById('currentWind').innerHTML = "";
document.getElementById('currentTemp').innerHTML = "";

document.getElementById('date-1').innerHTML = "";
document.getElementById('day1Humidity').innerHTML = "";
document.getElementById('day1Wind').innerHTML = "";
document.getElementById('day1Temp').innerHTML = "";

document.getElementById('date-2').innerHTML = "";
document.getElementById('day2Humidity').innerHTML = "";
document.getElementById('day2Wind').innerHTML = "";
document.getElementById('day2Temp').innerHTML = "";

document.getElementById('date-3').innerHTML = "";
document.getElementById('day3Humidity').innerHTML = "";
document.getElementById('day3Wind').innerHTML = "";
document.getElementById('day3Temp').innerHTML = "";

document.getElementById('date-4').innerHTML = "";
document.getElementById('day4Humidity').innerHTML = "";
document.getElementById('day4Wind').innerHTML = "";
document.getElementById('day4Temp').innerHTML = "";

document.getElementById('date-5').innerHTML = "";
document.getElementById('day5Humidity').innerHTML = "";
document.getElementById('day5Wind').innerHTML = "";
document.getElementById('day5Temp').innerHTML = "";
};

function clearMem () {
    document.getElementById('card1').innerHTML = "";
}

function logToMem() {
    
    var cardbodycontent = document.createTextNode(localStorage.getItem('CityName'));
 
    
    cardData1.appendChild(cardbodycontent);
};
var cardMEM  = document.getElementById('cardMEM');
cardMEM.addEventListener('click', newONE);
cardMEM.addEventListener('click', newONE1);

function newONE() {
    clearData();
var city = JSON.parse(localStorage.getItem('CityName'));
console.log(city)
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";

fetch(queryURL)
  .then((response) => response.json())
  .then((data) => generateCards(data));

localStorage.setItem('CityName', JSON.stringify(city)); 
}

function newONE1() {
    var city = JSON.parse(localStorage.getItem('CityName'));
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey2 + "&units=imperial";
    fetch(queryURL)
      .then((response) => response.json())
      .then((data) => generateCards1(data)); 
document.getElementById('inputCity').value = '';
}

logToMem();