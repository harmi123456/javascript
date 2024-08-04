
document.getElementById("submit").addEventListener("click", function() {
    let city = document.getElementById("city").value
    let url = `http://api.weatherapi.com/v1/current.json?key=6d4a8271c5fe43e0a1c162147240108&q=${city}`;

    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.clear();
            console.log(json);
            displayData(json); // json,cityname
        })
        .catch(error => {
            console.log('Error Fetching The Weather Data:', error);
        });
});

function displayData(json) {
    let div = document.createElement("div");
    div.className = "weather-card";
    document.getElementById("main").innerHTML = "";

    let city = document.createElement("h1");
    city.innerHTML = `<b>${json.location.name}</b>`;

    let temp_c = document.createElement("p");
    temp_c.innerHTML = `<b>Temperature: </b>${json.current.temp_c}°C`; //json[city_name].current

    let state = document.createElement("p");
    state.innerHTML = `<b>Region: </b>${json.location.region}`;

    let country = document.createElement("p");
    country.innerHTML = `<b>Country: </b>${json.location.country}`;

    let text = document.createElement("p");
    text.innerHTML = `<b>Condition: </b>${json.current.condition.text}`;

    let wind_mph = document.createElement("p");
    wind_mph.innerHTML = `<b>Wind Speed: </b>${json.current.wind_mph} mph`;

    let icon = document.createElement("img");
    icon.src = `${json.current.condition.icon}`;

    div.append(city, temp_c, state, country, text, wind_mph, icon);
    document.getElementById("main").append(div);
}
