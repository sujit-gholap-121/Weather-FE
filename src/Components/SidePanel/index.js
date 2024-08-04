import MultiSelector from "../MultiSelector"
import "./index.css"

const SidePanel = (props) => {
    const { selectedCities, setSelectedCities } = props
    return (
        <div className="panel-width">
            <MultiSelector selectedCities={selectedCities} setSelectedCities={setSelectedCities} />
        </div>

    )
}

export default SidePanel