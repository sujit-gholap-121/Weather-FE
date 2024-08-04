import { useCallback, useEffect, useState, useTransition } from "react"
import WeatherCard from "../WeatherCard"
import ConfigData from "../../data.json"
import "./index.css"
import SidePanel from "../SidePanel"

const Weather = () => {
    const [cityList, setCityList] = useState([])
    const [selectedCities, setSelectedCities] = useState("")

    useEffect(() => {
        (async () => {
            // const cityName = selectedCities.length > 0 ? selectedCities.at(-1) : selectedCities[0]
            if (selectedCities === "") return

            const response = await fetch(`http://localhost:4003/weather/${selectedCities}`)
            const { data, error } = await response.json();
            if (error) {
                setCityList([])
                // alert("city not found")
            } else {
                setCityList([data])
                console.log(data)
            }

        })()
    }, [selectedCities])

    const getTemperatureFromProps = useCallback((low, high) => {
        const temp = low < 0 ? low : high
        const foundLabel = ConfigData.temperatureTable.find(element => temp < element.value)
        if (foundLabel) {
            return foundLabel.label
        }
        return "Extremely Hot"
    })

    return (
        <div className="root-wrapper">
            <SidePanel selectedCities={selectedCities} setSelectedCities={setSelectedCities} />
            <div className="rootDivStyle">
                <div className="search-input">
                    <input value={selectedCities}
                        onChange={(e) => {
                            setSelectedCities(e.target.value)
                        }} />
                </div>
                {
                    cityList.map(city => <WeatherCard
                        city={city.name}
                        low={city.low}
                        high={city.high}
                        condition={city.condition}
                        temperatureLabel={city.temperatureLabel}
                        getTemperatureFromProps={getTemperatureFromProps}
                    />)
                }
            </div>
        </div>
    )
}
export default Weather