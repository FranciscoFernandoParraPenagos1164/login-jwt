import {StyledHome} from "./styles";
import {Link} from "wouter";
import User from "../../components/user/user";

function HomeView({children}) {
  return (
    <StyledHome>
      <Link href="create-user">+</Link>
      {children.map(({name, photo, email, id, isEnabled}) => (
        <User key={id} name={name} photo={photo} email={email} id={id} isEnabled={isEnabled} />
      ))}
    </StyledHome>
  );
}

export default HomeView;
