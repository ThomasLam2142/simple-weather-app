const apiKey = 'fdc60c470455a2ced54c787c389f2a43';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=fdc60c470455a2ced54c787c389f2a43';

const tempValueElement = document.querySelector('.tempValue');
const humidValueElement = document.querySelector('.humidValue');
const descriptionValueElement = document.querySelector('.descriptionValue');

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    let temperature = data.main.temp;
    let humidity = data.main.humidity;
    let description = data.weather[0].description;
    
    // Display the weather information
    console.log(`Temperature: ${temperature}°C`);
    console.log(`Humidity: ${humidity}%`);
    console.log(`Description: ${description}`);
    temperature = temperature - 273.15;
    temperature = Math.round(temperature);

    //tempValueElement = temperature - 273.15;
    tempValueElement.textContent = `${temperature}°C`;

    humidValueElement.textContent = `${humidity}%`

    descriptionValueElement.textContent = `${description}`


  })
  .catch(error => {
    console.error('Error:', error);
  });
