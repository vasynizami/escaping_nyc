//code for sidebar API calls to openWeather and giphy


const openWeather = async () => {

  const api = "a9774b2823a4f33972a6f727864cbae9";
  const base_url = "http://api.openweathermap.org/data/2.5/weather?q=manhattan&";
  const weatherDiv = document.querySelector(".weather");
  const response = await axios.get(`${base_url}units=imperial&appid=${api}`);

  //display results
  weatherDiv.innerHTML += `
    <div>
    <h2>Weather in NY</h2>
    <p>${response.data.main.temp}&#8457</p>
    <p>Wind: ${response.data.wind.speed}mph</p>
    <p>${response.data.weather[0].description}</p>
    </div>
  `
  //run giphy() inside the openWeather() because it needs to use openWeather's 
  //response results
  const giphy = async () => {

    const api = "fMI9TfopM0kycP7aWznKC62iGbzY0Pg7";
    const url = "http://api.giphy.com/v1/gifs/search";
    const weatherDiv = document.querySelector(".weather");
    const resp = await axios.get(`${url}?q=${response.data.weather[0].description}&api_key=${api}`);
    
    //display result
    weatherDiv.innerHTML += `
      <img src="${resp.data.data[0].images.fixed_height.url}"/>`
  }
  
  giphy();

}
openWeather();


//toggle sidebar on clicking the plane icon

const plane = document.querySelector(".toggle_bar");

plane.addEventListener("click", () => {
  const element = document.querySelector(".weather");
  // element.className = "open";
  element.classList.toggle("open");
})

