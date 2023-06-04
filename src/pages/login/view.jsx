import {StyledLogin} from "./styles";
import Input from "../../components/input/input";
import {Link} from "wouter";

function LoginView({userNameRef, passwordRef, onSubmitForm, failedLogin}) {
  return (
    <StyledLogin>
      <div className="login">
        <h1>Log in</h1>
        <form onSubmit={onSubmitForm}>
          <Input reference={userNameRef} required={true}>
            username
          </Input>
          <Input reference={passwordRef} required={true} type="password">
            password
          </Input>
          {failedLogin && <span>the username or password is incorrect</span>}
          <button>Log In</button>
        </form>
        <div>
          <Link href="/restaure-password">Forgor password?</Link>
          <Link href="/sign-up">Sign up</Link>
        </div>
      </div>
    </StyledLogin>
  );
}

export default LoginView;
