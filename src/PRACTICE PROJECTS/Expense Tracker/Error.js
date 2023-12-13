import { Link } from "react-router-dom"

function Error(){
    return(
        <div id="error-main-div">
<h1>Uh Oh! We have got  a prblem</h1>
<p>There was a problem in creating your account</p>
<Link to="/"><button>Go Home</button></Link> 
        </div>
    )
}
export default Error