const apiKey = 'fdc60c470455a2ced54c787c389f2a43';
let locationset = "Tokyo"
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationset}&appid=fdc60c470455a2ced54c787c389f2a43`;


const locationElement = document.querySelector('.setLocation');
const tempValueElement = document.querySelector('.tempValue');
const humidValueElement = document.querySelector('.humidValue');
const descriptionValueElement = document.querySelector('.descriptionValue');


document.addEventListener('DOMContentLoaded', function () {
  // Call your function here to execute it on page load
  fetchData(apiUrl);
});


function fetchData(apiUrl){
  console.log("fetching now")

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

    locationElement.textContent = locationset;

    tempValueElement.textContent = `${temperature}°C`;

    humidValueElement.textContent = `${humidity}%`

    descriptionValueElement.textContent = `${description}`


  })
  .catch(error => {
    console.error('Error:', error);
  });
}


function getLocation() {
    // Get the input field's value
    const inputText = document.getElementById("inputText").value;

    // Call your locationClick function with the input text
    locationClick(inputText);
}
  



  // Your locationClick function
function locationClick(inputText) {
  // Do something with the input text, for example, display an alert
  console.log(inputText);
  locationset = inputText;
  fetchData(apiUrl);
}


