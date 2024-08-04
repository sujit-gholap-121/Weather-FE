import "./index.css"
import images from "../../assets/images.js"

const WeatherCard = (props) => {
    const { low, high, city, condition, temperatureLabel, getTemperatureFromProps } = props

    return (
        <div className="cardStyle">
            <h1>{city} City</h1>
            <div>
                <img src={images[condition?.toLowerCase()]} className="imageStyle" />
            </div>
            <h4>{getTemperatureFromProps(low, high)}</h4>
            <label>Low {low}°C  High {high}°C</label>
        </div>
    )
}

export default WeatherCard