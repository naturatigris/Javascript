document.getElementById("getWeatherBtn").addEventListener("click", async () => {
    const city = document.getElementById("cityInput").value.trim();
  
    const result = document.getElementById("weatherResult");
    const error = document.getElementById("error");
  
    result.innerHTML = "";
    error.textContent = "";
  
    if (!city) {
      error.textContent = "Please enter a city name.";
      result.style.display = "none";  // Hide result if no city is entered
      return;
    }
  
    const apiKey = "1451fa2de64d0993d8ae2a69629422b4";    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
  
      const data = await response.json();
  
      const { name, main, weather } = data;
      result.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Temperature:</strong> ${main.temp}°C</p>
        <p><strong>Humidity:</strong> ${main.humidity}%</p>
        <p><strong>Condition:</strong> ${weather[0].description}</p>
      `;
      result.style.display = "block"; // Show result box
    } catch (err) {
      error.textContent = `Error: ${err.message}`;
      result.style.display = "none"; // Hide result if error occurs
    }
  });
  