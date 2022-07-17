const API_KEY = "a2c27418aa69d4f5e887c7f9cc4dcfef";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data=> {
        const weather= document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText=`${data.weather[0].main} / ${data.main.temp}`;

    });
}

function onGeoError(){
     alert("위치정보를 찾을 수 없습니다.");
}

//현재 위치좌표 불러오기
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);