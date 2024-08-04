const OptionItem = props => {
    const { option } = props
    return (
        <option id={option.id} value={option.name} >
            {option.name}
        </option>
    )
}

export default OptionItem