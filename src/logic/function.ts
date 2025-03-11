export async function getWeather () {

  const city = document.querySelector<HTMLInputElement>("#txtCity")?.value

  if(city == ""){

    return {error: { message: "Llene el buscador" }}

  }else{

    const res = await fetch(`
    https://api.weatherapi.com/v1/current.json?key=d9c0a07d278d4df3a16221458251003&q=${city}&aqi=yes
    `)
    const data = await res.json()

    return data

  }

}