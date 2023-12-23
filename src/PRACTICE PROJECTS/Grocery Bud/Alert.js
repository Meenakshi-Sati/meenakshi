import React, { useEffect, useState } from "react";

function Alert({ type, msg }) {
    const[alertAdded,setAlertAdded]=useState(false)

    const [alertMsg, setAlertMsg] = useState("")
    useEffect(() => {

        let timeOut = setTimeout(() => {
            setAlertMsg(msg)
            setAlertAdded(true)
        }, 100);

        let clear = setTimeout(() => {
            setAlertMsg("")
            setAlertAdded(false)
        }, 1000);



        return () => {
            console.log("cleartime")
            clearTimeout(timeOut);
            clearTimeout(clear)
        }
    }, []);

    return (
        <div id="alert-main-div">
            <h1 className={`alert ${type === "success" && alertAdded ? "green" : type === "failure" && alertAdded ? "red":""}`}>{alertMsg}</h1>
        </div>
    );
}

export default Alert;
