fetch('https://api.openweathermap.org/data/2.5/weather?lat=55.755864&lon=37.617698&appid=7996103e22e995776808af148bafe61b')
.then(function(resp){return resp.json()})
.then(function(data){
    console.log(data)
    document.querySelector('.sity-name').textContent  = 'Город: ' + data.name
    document.querySelector('.weather').textContent  = 'Описание: ' + data.weather[0]['description']
    document.querySelector('.temperature').textContent  = 'Температура: ' + Math.round(data.main.temp) + '°'
    document.querySelector('.wind-speed').textContent  = 'Cкорость ветра: ' + data.wind.speed
    document.querySelector('.humidity').textContent  = 'Влажность: ' + data.main.humidity
    document.querySelector('.country').textContent  = 'Страна: ' + data.sys.country
    document.querySelector('.sunrise').textContent  = 'Восход: ' + data.sys.sunrise
    document.querySelector('.sunset').textContent  = 'Закат: ' + data.sys.sunset
    document.querySelector('.icon').innerHTML = `<img src = 'https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png'>`
})

