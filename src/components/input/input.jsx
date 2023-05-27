import InputView from "./view";

function Input({reference, children, required}) {
  return <InputView reference={reference} label={children} required={required}></InputView>;
}

export default Input;
