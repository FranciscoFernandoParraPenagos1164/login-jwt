import InputView from "./view";

function Input({reference, children, required, type = "text"}) {
  return <InputView reference={reference} label={children} required={required} type={type}></InputView>;
}

export default Input;
