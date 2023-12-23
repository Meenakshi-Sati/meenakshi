import { Link } from "react-router-dom";

function Dashboard({ logoutTheUser, handleUsername, createAccount }) {
    return (
        <div id="dashboard-main-div">
            <div id="dashboard-top-pannel">
                <div id="dash-left-top">
                    <img id="home-img" src="https://cdn-icons-png.flaticon.com/512/9799/9799161.png" alt="" />
                    <h1 id="home-h">Home Budget</h1>
                </div>
                <button id="logout-btn" onClick={logoutTheUser}>LogOut</button>
            </div>
            <div id="dashboard-mid-pannel">
                <div id="dash-main-con">
                    <h1 id="dash-main-h">Take Control of <span id="span">Your Money</span></h1>
                    <p id="dash-main-p">Personal budgeting is the secret of financial freedom</p>
                    <div id="in-div">
                        <input onChange={handleUsername} id="dash-main-input" type="text" placeholder="What's your name" />
                        <Link to="/budget">
                            <button onClick={createAccount} id="dash-create-ac-btn">Create Account</button>
                        </Link>
                    </div>
                </div>
                <div id="dash-main-img-div">
                    <img id="imgggg" src="https://www.incred.com/uploads/2021/11/25055118/shutterstock_1911459154-01-1-1.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
