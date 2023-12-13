function Dashboard({ logoutTheUser,handleUsername,createAccount }) {

    return (
        <div id="dashboard-main-div">
            <div id="dashboard-top-pannel">
                <div id="dash-left-top">
                    <img src="" alt="" />
                    <h1>Home Budget</h1>
                </div>
                <button onClick={logoutTheUser}>LogOut</button>
            </div>
            <div id="dashboard-mid-pannel">
                <h1 id="dash-main-h">Take Control of <span>Your Money</span></h1>
                <p id="dash-main-p">Personal budgeting is the secret of financial freedom</p>
                <input onChange={handleUsername} id="dash-main-input" type="text" placeholder="What's your name" />
                <button onClick={createAccount} id="dash-create-ac-btn" >Create Account</button>
            </div>
        </div>
    )
}
export default Dashboard