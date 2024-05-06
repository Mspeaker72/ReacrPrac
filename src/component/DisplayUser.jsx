import Proptypes from "prop-types"
function DisplayUser ({user}){
   
    return (  <div className="profile_border">
        {/* {alert("welcome Back! "+user)} */}
        <p className="user">{user}</p>
        <img className="profile_img" src="src\assets\no_profile.png" alt="Profile Pic" />
    </div>

    );
}

DisplayUser.Proptypes={
    user : Proptypes.string
}

export default DisplayUser;