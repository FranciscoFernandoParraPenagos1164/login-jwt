import {StyledHome} from "./styles";
import {Link} from "wouter";
import User from "../../components/user/user";

function HomeView({isLoading, error, children}) {
  if (isLoading) {
    return <h1>loading</h1>;
  }

  if (error) {
    return <h1>error</h1>;
  }

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
