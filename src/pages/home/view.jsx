import {StyledHome} from "./styles";
import User from "../../components/user/user";

function HomeView({children}) {
  return (
    <StyledHome>
      {children.map(({name, photo, email, id, isEnabled}) => (
        <User key={id} name={name} photo={photo} email={email} id={id} isEnabled={isEnabled} />
      ))}
    </StyledHome>
  );
}

export default HomeView;
