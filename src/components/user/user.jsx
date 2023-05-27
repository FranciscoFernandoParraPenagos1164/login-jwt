import UserView from "./view";

function User({name, photo, email, id, isEnabled}) {
  return <UserView name={name} photo={photo} email={email} id={id} isEnabled={isEnabled}></UserView>;
}

export default User;
