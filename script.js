

let APIUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Kathmand&appid=78902c65366ecbfd628106db571d3d70&units=metric'

const inpElm = document.querySelector('.search-weather')
const buttonElm = document.querySelector('.search-button')
// let city = ' '



// Function to dispaly our fetch data 

const dispalyData = (data) =>{


   const {message} = data;


   if(message){
    document.querySelector(".heading").classList.add("loading");
    return

   }
    const {name: cityName} = data;
    const {main:{temp: temooFCity, humidity}} = data
    const {main: weatherType, icon} = data.weather[0]
    const {wind:{speed:windSpeed}} = data
    

    
    
    document.querySelector('.city').innerHTML = `Weather in ${cityName}`
    document.querySelector('.tempurature').innerHTML = `${temooFCity}°C`
    document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png"
    document.querySelector('.description').innerHTML = weatherType
    document.querySelector('.humidity').innerHTML = `Humidity: ${humidity}%`
    document.querySelector('.wind').innerHTML = `Wind Speed: ${windSpeed}Kmh`
    document.querySelector(".heading").classList.remove("loading");
    document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + cityName + "')"
    



    buttonElm.addEventListener('click', ()=>{
        getFetchData(inpElm.value)
    })
 


}



// fetch the data from API 
const getFetchData = (city) =>{
  

   try {
    APIUrl = "http://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=78902c65366ecbfd628106db571d3d70&units=metric"

    fetch(APIUrl).then((response)=> response.json()).then((data)=>{
        dispalyData(data)
    })
    
   } catch (error) {

    if(error){
        document.querySelector(".heading").classList.add("loading");
    return
    }
    
   }

}

getFetchData("Kathmandu")





// function to get the value from input field 
// const getInputValue = () =>{

//     buttonElm.addEventListener('click', ()=>{

//         city += inpElm.value
//     })

//     console.log(city);
// }


// getInputValue()