const apiKey="89e366586c3a46528d1144000232609"

async function weatherApiFetch(location){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`,{mode:"cors"})
    const data = await response.json();
    console.log(response.status)
    if(response.status != 200) alert("enter valid location")
    else{
        const display = document.querySelector(".display")
            display.innerHTML = `
            <h1>${data.location.name}</h1>
            <p>Temparature <span>${data.current.temp_c}</span></p>
            <p>Feels like <span>${data.current.feelslike_c}</span> C</p>
            <p>Humidity <span>${data.current.humidity}</span> </p>
            <p>Condition <span>${data.current.condition.text}</span></p>`
        return(data)
    }
}

function customLocation(){
    document.querySelector("form").addEventListener("submit",(e)=>{
        e.preventDefault()
        let inputLocation = document.querySelector("input")
        let data = weatherApiFetch(inputLocation.value).then((res)=>{
            console.log(res)
            const display = document.querySelector(".display")
            display.innerHTML = `
            <h1>${res.location.name}</h1>
            <p>Temparature <span>${res.current.temp_c}</span></p>
            <p>Feels like <span>${res.current.feelslike_c} </span> C</p>
            <p>Humidity <span>${res.current.humidity}</span></p>
            <p>Condition <span>${res.current.condition.text}</span></p>`
        })
        inputLocation.value=""
    })
}
customLocation();
weatherApiFetch("tokyo").catch(alert);