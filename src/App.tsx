import { useState } from 'react'
import { SearchBar } from './components/search-bar'
import { getWeather } from './logic/function'
import { Toaster, toast } from 'sonner'
import { InfoCard } from './components/information-card'
import { HomeTitle } from './components/home-title'
import 'boxicons/css/boxicons.min.css'
import './App.css'

function App() {

  const [data, setData] = useState("")
  const [city, setCity] = useState("")
  const [temperature, setTemperature] = useState("")
  const [weather, setWeather] = useState("")
  const [icon, setIcon] = useState("")

  return (

    <main className="w-screen h-screen flex items-center justify-center bg-neutral-950">

      <Toaster />

      <section className='bg-neutral-900 p-3 flex flex-col gap-3'>

        <SearchBar>

          <button className='bg-gray-900 rounded-md border border-gray-800 flex justify-center items-center
            px-3 active:outline-none' onClick={async () => {

              const resData = await getWeather()

              if(resData.error){

                toast.error(resData.error.message)

              }else{

                setData("si hay")
                setCity(() => resData.location.name)
                setTemperature(() => resData.current.temp_c)
                setWeather(() => resData.current.condition.text)
                setIcon(() => resData.current.condition.icon)

              }

            }}>

              <i className='bx bx-current-location text-xl'></i>

          </button>

        </SearchBar>

        {

          data == "si hay" ? 
          
          <InfoCard city={city} temperature={temperature} weather={weather} icon={icon} />

          :

          <HomeTitle />
          
        }

      </section>

    </main>

  )
}

export default App
