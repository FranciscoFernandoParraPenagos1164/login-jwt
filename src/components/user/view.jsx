import {StyledUser} from "./styles";
import userPNG from "../../assets/user.png";

function UserView({name, photo, email, id, isEnabled}) {
  return (
    <StyledUser>
      <div className="profile">
        <img src={photo || userPNG}></img>
        <h3>{name}</h3>
      </div>
      <div className="email">
        <h5>email</h5>
        <p>{email}</p>
      </div>
      <div className="code">
        <h5>codigo</h5>
        <p>{id}</p>
      </div>
      <div className={`isEnabled ${isEnabled ? "enabled" : "disabled"}`}></div>
    </StyledUser>
  );
}

export default UserView;
