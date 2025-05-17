async function getWeather() {
    const city = document.getElementById("city-input").value;
    const resultDiv = document.getElementById("weather-result");
  
    if (!city) {
      resultDiv.innerHTML = "Please enter a city name.";
      return;
    }
  
    try {
      const apiKey = "23935262edd7494b887121716250504";
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
  
      if (!response.ok) throw new Error("Weather data not found");
  
      const data = await response.json();
  
      resultDiv.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <img src="https:${data.current.condition.icon}" alt="Weather Icon" />
      `;
    } catch (error) {
      resultDiv.innerHTML = "Error fetching weather data.";
      console.error(error);
    }
  }
  