import {StyledCreateUser} from "./styles";
import Input from "../../components/input/input";

function CreateUserView({userReference, emailReference, nameReference, passwordReference, profileReference, onSubmitForm}) {
  return (
    <StyledCreateUser>
      <div className="create-user">
        <h1>Create an user</h1>
        <form onSubmit={onSubmitForm}>
          <Input reference={userReference} required={true} type="date">
            Date
          </Input>
          <Input reference={emailReference} required={true} type="email">
            Email
          </Input>
          <Input reference={nameReference} required={true}>
            Name
          </Input>
          <Input reference={passwordReference} required={true} type="password">
            Password
          </Input>
          <select ref={profileReference}>
            <option value={0}>User</option>
            <option value={1}>Admin</option>
          </select>
          <button>Crear</button>
        </form>
      </div>
    </StyledCreateUser>
  );
}

export default CreateUserView;
