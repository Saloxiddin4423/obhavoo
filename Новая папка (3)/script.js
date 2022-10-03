const api = {    
    key:'7bf990c94b7577144b71848d864cfc34',
    baseurl:'https://api.openweathermap.org/data/2.5/',
} ;
const seacrhBox = document.querySelector(".search-box");

seacrhBox.addEventListener("keypress",  setQuery);    

function setQuery(e){
    if(e.keyCode == 13 ){
        getResults(seacrhBox.value );
    }
}
function getResults(query){
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather=>{
        return weather.json();
    }).then(displayResults)
} 
function displayResults(weather){
    let stiy = document.querySelector('.location .sity').innerHTML =
    `${weather.name},${weather.sys.country}`; 

    let now = new Date ();
    let date = document.querySelector('.location .date');
    date.innerHTML= dateBuilder(now);

    let temp =document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

    let weaterEL = document.querySelector('.weather');
    weaterEL.innerHTML = weather.weather[0].main;
    let hilow = document.querySelector( '.hi-ow');
    hilow.innerHTML = `${Math.round(weather.main.temp_min)}°C/${Math.round(weather.main.temp_max)}°C`
}  
function dateBuilder(s){
    let oylar =['Yanvar','Febral','Mart','Aprel','May','Iyun','Iyul','Avgust','Sentabr','Oktiabr','Noyabr','Dekabir'];
    let haftalar = ['Dushanba','Seashanba','Chorshanba','Payshanaba','Juma','Shanba','Yakshanba'];
    let day = haftalar[s.getDay()];
    let date = s.getDate();
    let month = oylar [s.getMonth()];
    let year = s.getFullYear();

    return ` ${day} ${date} ${month} ${year}`;

    
    
}
     