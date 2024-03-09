const apikey = '4d8672d1db264459ea74ed21ec718bcc';


async function fetchdata(city) {
  try {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
if(!response.ok){
  throw new error("unable to fetch the data:")
}
  const data = await response.json();
  console.log(data);
  console.log(data.main.temp);
  console.log(data.name);
  console.log(data.wind.speed);
  console.log(data.main.humidity);
  console.log(data.visibility);

updateweather(data)
  }
  catch(err){
    console.error(err)
  }
}
const cityele=document.querySelector('.city');
const temp=document.querySelector('.temp');
const windspeed=document.querySelector('.wind-speed');
const humidity=document.querySelector('.humidity');
const visi=document.querySelector('.visibility');
const des=document.querySelector('.description');
const date=document.querySelector('.date');


function updateweather(data){
cityele.textContent=data.name;
temp.textContent=Math.round(data.main.temp);
windspeed.textContent=data.wind.speed;
humidity.textContent=data.main.humidity;
visi.textContent=data.visibility;
des.textContent=data.weather[0].description;

const currentdate=new Date();
date.textContent=currentdate.toDateString();

}


const formele=document.querySelector('.search');
const input=document.querySelector('.city-input');
formele.addEventListener('submit', function(e){
  e.preventDefault();
  const city=input.value;
  if(city!==""){
    fetchdata(city);
    input.value=""
  }

})
