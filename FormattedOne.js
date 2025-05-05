function FormattedDate(props){
    return(
        <div>
            <h2>Current Date and Time Showing</h2>
            <p>{props.date.toLocaleDateString()}</p>
            <p>{props.date.toLocaleTimeString()}</p>
        </div>
    )
}

export default FormattedDate;