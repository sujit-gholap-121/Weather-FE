import { useEffect, useState } from "react"
import "./index.css"
import OptionItem from "../OptionItem";

const MultiSelector = props => {
    const { selectedCities, setSelectedCities } = props;
    const [optionsList, setOptionsList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCityOptions = async () => {
            try {
                setLoading(true)
                const response = await fetch("http://localhost:4003/weather/")
                const { data } = await response.json();
                setLoading(false)
                setOptionsList(data)
                console.log(data)
                setSelectedCities(data[0].name)
            } catch (error) {
                console.log(error.message)
                alert(error.message)
                setLoading(false)
            }
        }
        fetchCityOptions()

    }, [])

    // console.log("optionsList", optionsList)
    console.log(selectedCities)
    return (
        <>
            <select className="select-width" onChange={(e) => setSelectedCities(e.target.value)}>
                {
                    optionsList?.map(option => {
                        return (<OptionItem option={option} />);
                    })
                }
            </select>
        </>
    )
}

export default MultiSelector