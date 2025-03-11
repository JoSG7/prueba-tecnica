export function InfoCard ({city, temperature, weather, icon}: {
  city: string, temperature: string, weather: string, icon: string
}) {

  return(

    <div className='p-3 rounded-md bg-gray-900 border border-gray-800 flex gap-3 items-center justify-between'>

      <div className='flex flex-col gap-3'>

        <p>city: {city}</p>
        <p>temperature: {temperature}</p>
        <p>weather: {weather}</p>

      </div>
              
      <img src={icon} alt="icon" width={96}/>
            
    </div>

  )

}