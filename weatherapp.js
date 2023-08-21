const apiKey = 'fdc60c470455a2ced54c787c389f2a43';
const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={6ab1e19345bdde5cda585ae14f32e39d}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Process the data here
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
