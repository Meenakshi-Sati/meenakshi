import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";

function Main() {
    const [username, setUsername] = useState("")

    useEffect(() => {
        let savedUsername = localStorage.getItem("Username")
        if (savedUsername) {
            console.log(JSON.parse(savedUsername))
        }
    }, [username])

    function logoutTheUser() {
        localStorage.removeItem("Username");
        toast.info("User has been logged out")
    }

    function handleUsername(e) {
        let value = e.target.value
        setUsername(value)
    }
    
    function createAccount() {
        toast.info("User has been logged in")
        localStorage.setItem("Username", JSON.stringify(username))
    }

    return (
        <div id="ex-tracker-main-div">
         <Dashboard  logoutTheUser={logoutTheUser} handleUsername={handleUsername} createAccount={createAccount} />
        </div>
    )
}
export default Main