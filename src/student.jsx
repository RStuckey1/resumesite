
function Student(props) {
    return (
        <div>
            <h1>Student</h1>
            <p>Name: {props.name}</p>
            <p>Roll: {props.roll ? "Yes" : "No"}</p>
            <p>Class: {props.class}</p>
        </div>
    )
  
}
export default Student