const key='5b463bbbe3eb87d043b27996ffcebbc8'
let inp=document.getElementById('city')
const URLapi='https://api.openweathermap.org/data/2.5/weather?units=metric&q='
async function checkWeather(){
    const response= await fetch(URLapi+inp.value+`&appid=${key}`)
    if(response.status==404){
        document.getElementById('error').style.display='block'
        document.getElementById('weather').style.display='none'
    
    }
    else{
                var data=await response.json()
                // console.log(data);
                document.getElementById('name').innerHTML=data.name
                document.getElementById('temperature').innerHTML=data.main.temp+'℃'
                document.getElementById('feelLike').innerHTML='Feels Like: '+ data.main.feels_like+'℃' 
                document.getElementById('description').innerHTML=data.weather[0].description
                document.getElementById('humidityImage').innerHTML=`<span style="font-size:20px;top: -10px;margin-left:80px">Humidity</span><br><svg style="color: rgb(45, 9, 174); margin-left:30px" xmlns="http://www.w3.org/2000/svg" width="30" height="50"  fill="currentColor" class="bi bi-moisture" viewBox="0 0 16 16"> <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z" fill="#2d09ae"></path> </svg>`
                document.getElementById('humidityValue').innerHTML=data.main.humidity+'%'
                document.getElementById('windImage').innerHTML=`<span style="font-size:20px;top: -10px;margin-left:80px">Wind Speed</span><br><svg xmlns="http://www.w3.org/2000/svg"style="color: rgb(45, 9, 174); margin-left:40px" width="30" height="50" fill="white" class="bi bi-wind" viewBox="0 0 16 16"> <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/> </svg>`
                document.getElementById('windValue').innerHTML=data.wind.speed+' km/h'
                document.getElementById('pressureImage').innerHTML=`<span style="font-size:20px;top: -10px;margin-left:80px">Pressure</span><br><svg fill="#000000"style=" margin-left:60px" height="50px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 188.377 188.377" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M158.717,24.669c-5.23-12.101-17.528-20.058-31.432-20.058c-17.526,0-32,12.741-33.825,29.07 c-12.736,1.128-22.754,11.749-22.754,24.64c0,13.017,10.154,23.763,23.206,24.675c0.218,0.042,0.439,0.063,0.663,0.063h63.166 c0.096,0,0.19-0.004,0.284-0.01c0.28,0.007,0.562,0.01,0.844,0.01c16.271,0,29.508-13.097,29.508-29.195 C188.377,37.717,175.219,24.596,158.717,24.669z M158.868,75.927c-0.326,0-0.649-0.007-0.97-0.021 c-0.054-0.004-0.108-0.004-0.162-0.004c-0.139,0-0.277,0.007-0.413,0.024H95.028c-0.089-0.01-0.176-0.017-0.265-0.024 c-9.493-0.481-16.927-8.204-16.927-17.582c0-10.025,8.7-18.021,18.829-17.582c0.97,0.045,1.924-0.324,2.627-0.996 c0.705-0.676,1.104-1.619,1.104-2.594c0-14.009,12.062-25.406,26.888-25.406c11.791,0,22.097,7.132,25.647,17.746 c0.524,1.57,2.07,2.622,3.719,2.417c0.73-0.07,1.469-0.104,2.218-0.104c12.339,0,22.377,9.897,22.377,22.063 C181.245,66.031,171.208,75.927,158.868,75.927z"></path> <path d="M102.797,115.152L102.797,115.152v-7.133H12.176l6.519-6.519l-5.042-5.042L1.045,109.065 C0.376,109.733,0,110.638,0,111.586c0,0.947,0.376,1.852,1.045,2.521l12.607,12.606l5.042-5.042l-6.519-6.519H102.797z"></path> <path d="M131.324,143.678v-7.132H40.702l6.519-6.519l-5.042-5.042l-12.607,12.606c-0.669,0.669-1.045,1.574-1.045,2.521 c0,0.947,0.376,1.852,1.045,2.521l12.607,12.606l5.042-5.042l-6.519-6.519H131.324z"></path> <path d="M156.284,153.512l-5.042,5.042l6.519,6.519H63.573v7.132h94.188l-6.519,6.519l5.042,5.042l12.607-12.606 c0.669-0.669,1.045-1.574,1.045-2.521c0-0.947-0.376-1.852-1.045-2.521L156.284,153.512z"></path> </g> </g> </g> </g></svg>`
                document.getElementById('pressureValue').innerHTML=data.main.pressure+' mb'
            if(data.weather[0].main=='Clouds'){
                document.getElementById('tempImage').innerHTML=`<img src="./images/clouds.png">`
            }
            else  if(data.weather[0].main=='Clear'){
                document.getElementById('tempImage').innerHTML=`<img src="./images/clear.png">`
            }
            else  if(data.weather[0].main=='Drizzle'){
                document.getElementById('tempImage').innerHTML=`<img src="./images/drizzle.png">`
            }
            else  if(data.weather[0].main=='Thunderstorm'||data.weather[0].main=='Squall'||data.weather[0].main=='Tornado'){
                document.getElementById('tempImage').innerHTML=`<img src="./images/thunderstorm.png">`
            }
            else  if(data.weather[0].main=='Rain'){
                document.getElementById('tempImage').innerHTML=`<img src="./images/rain.png">`
            }
            else  if(data.weather[0].main=='Snow'){
                document.getElementById('tempImage').innerHTML=`<img src="./images/snow.png">`
            }
            else  if(data.weather[0].main=='Haze'){
                document.getElementById('tempImage').innerHTML=`<img src="./images/Haze.png">`
            }
            else  if(data.weather[0].main=='Mist'||data.weather[0].main=='Fog'){
                document.getElementById('tempImage').innerHTML=`<img src="./images/fog.png">`
            }
            else  if(data.weather[0].main=='Smoke'|| data.weather[0].main=='Ash' || data.weather[0].main=='Dust'){
                document.getElementById('tempImage').innerHTML=`<img src="./images/smoke.png">`
            }
            document.getElementById('error').style.display='none'
            document.getElementById('weather').style.display='block'
           
        } 
        // if(document.getElementById('city').value==''){
        //     alert("Input is empty")
        // }
    }
document.getElementById('searcher').addEventListener('click',()=>{
     checkWeather()
     inp.value=""
})
inp.addEventListener('keydown',(event)=>{
    if(event.key=="Enter"){
     checkWeather()
     inp.value=""
}})