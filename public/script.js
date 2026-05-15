async function getWeather() {
  const city = document.getElementById("city").value;

  const result = document.getElementById("result");

  try {
    const response = await fetch(`/weather/${city}`);

    const data = await response.json();

    result.innerHTML = `
            <h2>${data.name}</h2>

            <p>Temperature:
            ${data.main.temp} °C</p>

            <p>Weather:
            ${data.weather[0].main}</p>

            <p>Humidity:
            ${data.main.humidity}%</p>

            <p>Wind:
            ${data.wind.speed} m/s</p>
        `;
  } catch (error) {
    result.innerHTML = `<p>City not found</p>`;
  }
}
